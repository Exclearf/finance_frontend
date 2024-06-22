export interface CompanySearch {
  ticker: string;
  name: string;
  type: string;
  currency_name: string;
}

export interface CompanyProfile {
  address: string;
  city: string;
  country: string;
  currency: string;
  cusip: string;
  sedol: string;
  description: string;
  employeeTotal: string;
  exchange: string;
  ggroup: string;
  gind: string;
  gsector: string;
  gsubind: string;
  ipo: string;
  isin: string;
  marketCapitalization: number;
  naics: string;
  naicsNationalIndustry: string;
  naicsSector: string;
  naicsSubsector: string;
  name: string;
  phone: string;
  shareOutstanding: number;
  state: string;
  ticker: string;
  weburl: string;
  logo: string;
  finnhubIndustry: string;
}

export interface Welcome {
  results: Result[];
  status: string;
  request_id: string;
  next_url: string;
}

export interface Result {
  start_date: Date;
  end_date: Date;
  timeframe: Timeframe;
  fiscal_period: string;
  fiscal_year: string;
  cik: string;
  sic: string;
  tickers: Ticker[];
  company_name: CompanyName;
  financials: Financials;
  filing_date?: Date;
  acceptance_datetime?: Date;
  source_filing_url?: string;
  source_filing_file_url?: string;
}

export interface CompanyName {
  AppleInc: string;
  CompanyNameAppleInc: string;
}

export interface Financials {
  comprehensive_income: ComprehensiveIncome;
  balance_sheet: { [key: string]: BalanceSheet };
  cash_flow_statement: CashFlowStatement;
  income_statement: { [key: string]: BalanceSheet };
}

export interface BalanceSheet {
  value: number;
  unit: Unit;
  label: string;
  order: number;
}

export interface Unit {
  Shares: string;
  USDShares: string;
  Usd: string;
}

export interface CashFlowStatement {
  net_cash_flow_from_operating_activities_continuing: BalanceSheet;
  net_cash_flow_continuing: BalanceSheet;
  net_cash_flow_from_investing_activities: BalanceSheet;
  net_cash_flow_from_financing_activities_continuing: BalanceSheet;
  net_cash_flow_from_financing_activities: BalanceSheet;
  net_cash_flow: BalanceSheet;
  net_cash_flow_from_investing_activities_continuing: BalanceSheet;
  net_cash_flow_from_operating_activities: BalanceSheet;
}

export interface ComprehensiveIncome {
  comprehensive_income_loss_attributable_to_parent: BalanceSheet;
  other_comprehensive_income_loss_attributable_to_parent: BalanceSheet;
  other_comprehensive_income_loss: BalanceSheet;
  comprehensive_income_loss: BalanceSheet;
  comprehensive_income_loss_attributable_to_noncontrolling_interest: BalanceSheet;
}

export interface Ticker {
  Aapl: string;
}

export interface Timeframe {
  Annual: string;
  Quarterly: string;
  Ttm: string;
}
