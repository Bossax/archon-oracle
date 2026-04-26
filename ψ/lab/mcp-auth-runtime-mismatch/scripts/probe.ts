import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

/**
 * MCP Probe: Diagnostic tool to verify environment inheritance.
 */

const server = new Server(
  {
    name: "mcp-probe",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "probe_env",
        description: "Returns the current environment variables visible to the MCP server.",
        inputSchema: {
          type: "object",
          properties: {
            filter: {
              type: "string",
              description: "Optional substring to filter environment keys."
            }
          }
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "probe_env") {
    const filter = (request.params.arguments?.filter as string)?.toUpperCase();
    const env = process.env;
    const filteredEnv: Record<string, string | undefined> = {};

    Object.keys(env).forEach((key) => {
      if (!filter || key.toUpperCase().includes(filter)) {
        // Mask sensitive parts of keys if they look like secrets, but show existence
        const value = env[key];
        if (key.includes("KEY") || key.includes("SECRET") || key.includes("TOKEN") || key.includes("AUTH")) {
          filteredEnv[key] = value ? `${value.substring(0, 4)}...${value.substring(Math.max(0, value.length - 4))}` : undefined;
        } else {
          filteredEnv[key] = value;
        }
      }
    });

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(filteredEnv, null, 2),
        },
      ],
    };
  }

  throw new Error("Tool not found");
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCP Probe server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
