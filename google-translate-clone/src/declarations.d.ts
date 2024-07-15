declare module 'openai' {
    // Define the types based on the OpenAI API documentation
    export interface CompletionRequest {
      model: string;
      prompt: string;
      max_tokens?: number;
      temperature?: number;
      top_p?: number;
      n?: number;
      stream?: boolean;
      logprobs?: number;
      stop?: string | string[];
    }
  
    export interface CompletionResponse {
      id: string;
      object: string;
      created: number;
      model: string;
      choices: Array<{
        text: string;
        index: number;
        logprobs: any;
        finish_reason: string;
      }>;
    }
  
    export class OpenAIApi {
      constructor(configuration: { apiKey: string });
      createCompletion(request: CompletionRequest): Promise<CompletionResponse>;
    }
  }
  