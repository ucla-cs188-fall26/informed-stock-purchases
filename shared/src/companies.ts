export interface Company {
  ticker: string;
  name: string;
  /**
   * Text that refers to this company on a page. Matched case-sensitively.
   * Avoid ambiguous aliases: short tickers (V, KO, T) and tickers that are common words (COST, DIS, CAT).
   */
  aliases: string[];
}

export const COMPANIES: Company[] = [
  { ticker: 'AAPL', name: 'Apple Inc.', aliases: ['Apple', 'AAPL'] },
  { ticker: 'MSFT', name: 'Microsoft Corporation', aliases: ['Microsoft', 'MSFT'] },
  { ticker: 'NVDA', name: 'NVIDIA Corporation', aliases: ['Nvidia', 'NVIDIA', 'NVDA'] },
  { ticker: 'GOOGL', name: 'Alphabet Inc.', aliases: ['Alphabet', 'Google', 'GOOGL', 'GOOG'] },
  { ticker: 'AMZN', name: 'Amazon.com, Inc.', aliases: ['Amazon', 'AMZN'] },
  { ticker: 'META', name: 'Meta Platforms, Inc.', aliases: ['Meta Platforms', 'Meta', 'Facebook', 'META'] },
  { ticker: 'TSLA', name: 'Tesla, Inc.', aliases: ['Tesla', 'TSLA'] },
  { ticker: 'BRK.B', name: 'Berkshire Hathaway Inc.', aliases: ['Berkshire Hathaway', 'BRK.B', 'BRK.A'] },
  { ticker: 'AVGO', name: 'Broadcom Inc.', aliases: ['Broadcom', 'AVGO'] },
  { ticker: 'JPM', name: 'JPMorgan Chase & Co.', aliases: ['JPMorgan Chase', 'JPMorgan', 'JP Morgan', 'JPM'] },
  { ticker: 'LLY', name: 'Eli Lilly and Company', aliases: ['Eli Lilly', 'LLY'] },
  { ticker: 'V', name: 'Visa Inc.', aliases: ['Visa'] },
  { ticker: 'MA', name: 'Mastercard Incorporated', aliases: ['Mastercard'] },
  { ticker: 'UNH', name: 'UnitedHealth Group Incorporated', aliases: ['UnitedHealth Group', 'UnitedHealth', 'UNH'] },
  { ticker: 'XOM', name: 'Exxon Mobil Corporation', aliases: ['ExxonMobil', 'Exxon Mobil', 'Exxon', 'XOM'] },
  { ticker: 'WMT', name: 'Walmart Inc.', aliases: ['Walmart', 'WMT'] },
  { ticker: 'JNJ', name: 'Johnson & Johnson', aliases: ['Johnson & Johnson', 'JNJ'] },
  { ticker: 'PG', name: 'The Procter & Gamble Company', aliases: ['Procter & Gamble', 'P&G'] },
  { ticker: 'HD', name: 'The Home Depot, Inc.', aliases: ['Home Depot'] },
  { ticker: 'COST', name: 'Costco Wholesale Corporation', aliases: ['Costco'] },
  { ticker: 'ORCL', name: 'Oracle Corporation', aliases: ['Oracle', 'ORCL'] },
  { ticker: 'NFLX', name: 'Netflix, Inc.', aliases: ['Netflix', 'NFLX'] },
  { ticker: 'BAC', name: 'Bank of America Corporation', aliases: ['Bank of America'] },
  { ticker: 'KO', name: 'The Coca-Cola Company', aliases: ['Coca-Cola'] },
  { ticker: 'PEP', name: 'PepsiCo, Inc.', aliases: ['PepsiCo'] },
  { ticker: 'CVX', name: 'Chevron Corporation', aliases: ['Chevron', 'CVX'] },
  { ticker: 'ABBV', name: 'AbbVie Inc.', aliases: ['AbbVie', 'ABBV'] },
  { ticker: 'MRK', name: 'Merck & Co., Inc.', aliases: ['Merck', 'MRK'] },
  { ticker: 'PFE', name: 'Pfizer Inc.', aliases: ['Pfizer', 'PFE'] },
  { ticker: 'AMD', name: 'Advanced Micro Devices, Inc.', aliases: ['Advanced Micro Devices', 'AMD'] },
  { ticker: 'INTC', name: 'Intel Corporation', aliases: ['Intel', 'INTC'] },
  { ticker: 'QCOM', name: 'Qualcomm Incorporated', aliases: ['Qualcomm', 'QCOM'] },
  { ticker: 'CSCO', name: 'Cisco Systems, Inc.', aliases: ['Cisco', 'CSCO'] },
  { ticker: 'IBM', name: 'International Business Machines Corporation', aliases: ['IBM'] },
  { ticker: 'ADBE', name: 'Adobe Inc.', aliases: ['Adobe', 'ADBE'] },
  { ticker: 'CRM', name: 'Salesforce, Inc.', aliases: ['Salesforce'] },
  { ticker: 'PLTR', name: 'Palantir Technologies Inc.', aliases: ['Palantir', 'PLTR'] },
  { ticker: 'UBER', name: 'Uber Technologies, Inc.', aliases: ['Uber', 'UBER'] },
  { ticker: 'PYPL', name: 'PayPal Holdings, Inc.', aliases: ['PayPal', 'PYPL'] },
  { ticker: 'DIS', name: 'The Walt Disney Company', aliases: ['Walt Disney', 'Disney'] },
  { ticker: 'NKE', name: 'NIKE, Inc.', aliases: ['Nike', 'NKE'] },
  { ticker: 'MCD', name: "McDonald's Corporation", aliases: ["McDonald's", 'McDonald’s'] },
  { ticker: 'SBUX', name: 'Starbucks Corporation', aliases: ['Starbucks', 'SBUX'] },
  { ticker: 'BA', name: 'The Boeing Company', aliases: ['Boeing'] },
  { ticker: 'CAT', name: 'Caterpillar Inc.', aliases: ['Caterpillar'] },
  { ticker: 'GS', name: 'The Goldman Sachs Group, Inc.', aliases: ['Goldman Sachs'] },
  { ticker: 'MS', name: 'Morgan Stanley', aliases: ['Morgan Stanley'] },
  { ticker: 'T', name: 'AT&T Inc.', aliases: ['AT&T'] },
  { ticker: 'VZ', name: 'Verizon Communications Inc.', aliases: ['Verizon'] },
  { ticker: 'F', name: 'Ford Motor Company', aliases: ['Ford Motor'] },
  { ticker: 'GM', name: 'General Motors Company', aliases: ['General Motors'] },
];
