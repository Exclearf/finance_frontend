import axios from "axios";
import { CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
  data: {
    result: CompanySearch[];
  };
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://finnhub.io/api/v1/search?q=${query}&token=${process.env.REACT_APP_FINANCE_API_KEY}`
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
      return error.message;
    }
    console.log(error);
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile>(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${query}&token=${process.env.REACT_APP_FINANCE_API_KEY}`
    );

    return data;
  } catch (error: any) {
    console.log("API call failed. " + error.message);
  }
};
