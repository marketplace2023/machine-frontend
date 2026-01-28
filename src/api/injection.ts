import apiClient from "./client";

export interface InjectionParams {
  pressure: number;
  speed: number;
  temperature: number;
}

export interface AdjustParamsRequest {
  pressure?: number;
  speed?: number;
}

export const injectionApi = {
  getParameters: async (): Promise<InjectionParams> => {
    const response = await apiClient.get("/injection/params");
    return response.data;
  },

  adjustParameters: async (params: AdjustParamsRequest): Promise<void> => {
    await apiClient.post("/injection/adjust", params);
  },
};
