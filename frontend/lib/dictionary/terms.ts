export interface Term {
  id: string;
  label: string;
  /**
   * Text that refers to this term on a page. Matching ignores case, except for
   * all-caps aliases (EPS, ETF), which must appear in caps. A trailing "s" is also matched.
   */
  aliases: string[];
  definition: string;
}

export const TERMS: Term[] = [
  // Valuation
  { id: 'pe-ratio', label: 'P/E ratio (price-to-earnings)', aliases: ['P/E ratio', 'P/E', 'PE ratio', 'price-to-earnings ratio', 'price-to-earnings'], definition: 'Share price divided by earnings per share. A higher P/E means investors pay more for each dollar of profit, often because they expect fast growth.' },
  { id: 'forward-pe', label: 'Forward P/E', aliases: ['forward P/E', 'forward earnings multiple'], definition: 'A P/E ratio that uses analysts’ estimates of next year’s earnings instead of last year’s actual earnings.' },
  { id: 'pb-ratio', label: 'P/B ratio (price-to-book)', aliases: ['P/B ratio', 'P/B', 'price-to-book ratio', 'price-to-book'], definition: 'Share price divided by book value per share. Below 1 can mean the stock trades for less than the company’s net assets on paper.' },
  { id: 'ps-ratio', label: 'P/S ratio (price-to-sales)', aliases: ['P/S ratio', 'price-to-sales ratio', 'price-to-sales'], definition: 'Market cap divided by annual revenue. Useful for young companies that do not make a profit yet.' },
  { id: 'peg-ratio', label: 'PEG ratio', aliases: ['PEG ratio'], definition: 'The P/E ratio divided by the expected earnings growth rate. Around 1 is often seen as fairly priced for its growth.' },
  { id: 'market-cap', label: 'Market capitalization', aliases: ['market capitalization', 'market cap', 'market value'], definition: 'Share price times the number of shares. It is what the stock market says the whole company is worth.' },
  { id: 'enterprise-value', label: 'Enterprise value', aliases: ['enterprise value'], definition: 'Market cap plus debt minus cash. Roughly what it would cost to buy the whole business, including paying off its debt.' },
  { id: 'ev-ebitda', label: 'EV/EBITDA', aliases: ['EV/EBITDA'], definition: 'Enterprise value divided by EBITDA. A valuation measure that lets you compare companies with different amounts of debt.' },
  { id: 'book-value', label: 'Book value', aliases: ['book value'], definition: 'Total assets minus total liabilities on the balance sheet. What shareholders would own on paper if everything were sold at recorded value.' },
  { id: 'intrinsic-value', label: 'Intrinsic value', aliases: ['intrinsic value', 'fair value'], definition: 'An estimate of what a company is really worth based on its future cash flows, which may differ from its current market price.' },
  { id: 'price-target', label: 'Price target', aliases: ['price target'], definition: 'An analyst’s prediction of where a stock’s price will be, usually 12 months from now. Targets are opinions and are often wrong.' },

  // Earnings and profitability
  { id: 'eps', label: 'EPS (earnings per share)', aliases: ['EPS', 'earnings per share'], definition: 'A company’s profit divided by its number of shares. It shows how much profit each share represents.' },
  { id: 'revenue', label: 'Revenue', aliases: ['revenue', 'top line'], definition: 'The total money a company brings in from selling its products and services, before any costs are taken out.' },
  { id: 'net-income', label: 'Net income', aliases: ['net income', 'net profit', 'bottom line'], definition: 'What is left of revenue after every cost, interest payment, and tax is paid. The company’s final profit.' },
  { id: 'operating-income', label: 'Operating income', aliases: ['operating income', 'operating profit'], definition: 'Profit from the company’s main business, before interest and taxes.' },
  { id: 'ebitda', label: 'EBITDA', aliases: ['EBITDA'], definition: 'Earnings before interest, taxes, depreciation, and amortization. A rough measure of cash profit from operations.' },
  { id: 'gross-margin', label: 'Gross margin', aliases: ['gross margin'], definition: 'The share of revenue left after paying the direct cost of making the product. High gross margins often mean strong pricing power.' },
  { id: 'operating-margin', label: 'Operating margin', aliases: ['operating margin'], definition: 'Operating income divided by revenue. It shows how much of each sales dollar the core business keeps as profit.' },
  { id: 'profit-margin', label: 'Profit margin', aliases: ['profit margin', 'net margin'], definition: 'Net income divided by revenue. It shows how much of each sales dollar becomes final profit.' },
  { id: 'roe', label: 'ROE (return on equity)', aliases: ['ROE', 'return on equity'], definition: 'Net income divided by shareholders’ equity. It shows how well a company turns investors’ money into profit.' },
  { id: 'roa', label: 'ROA (return on assets)', aliases: ['ROA', 'return on assets'], definition: 'Net income divided by total assets. It shows how efficiently a company uses everything it owns to make a profit.' },
  { id: 'roic', label: 'ROIC (return on invested capital)', aliases: ['ROIC', 'return on invested capital'], definition: 'Profit divided by all the money invested in the business, from both shareholders and lenders. A high, steady ROIC is a sign of a strong business.' },
  { id: 'earnings-report', label: 'Earnings report', aliases: ['earnings report', 'quarterly earnings', 'quarterly results'], definition: 'The financial results a public company releases every three months, showing revenue, profit, and often a forecast.' },
  { id: 'earnings-call', label: 'Earnings call', aliases: ['earnings call'], definition: 'A conference call where company leaders discuss quarterly results and answer analysts’ questions.' },
  { id: 'guidance', label: 'Guidance', aliases: ['guidance'], definition: 'A company’s own forecast of its future revenue or earnings. Stocks often move more on guidance than on past results.' },
  { id: 'beat-estimates', label: 'Analyst estimates', aliases: ['analyst estimates', 'consensus estimate', 'Wall Street estimates'], definition: 'The average of analysts’ predictions for a company’s results. “Beating” or “missing” estimates often moves the stock price.' },

  // Cash flow and balance sheet
  { id: 'free-cash-flow', label: 'Free cash flow', aliases: ['free cash flow', 'FCF'], definition: 'Cash a company has left after paying for operations and investments. It can fund dividends, buybacks, or growth.' },
  { id: 'operating-cash-flow', label: 'Operating cash flow', aliases: ['operating cash flow', 'cash from operations'], definition: 'Cash generated by the company’s day-to-day business. Unlike net income, it is hard to inflate with accounting choices.' },
  { id: 'balance-sheet', label: 'Balance sheet', aliases: ['balance sheet'], definition: 'A snapshot of what a company owns (assets), what it owes (liabilities), and what belongs to shareholders (equity).' },
  { id: 'income-statement', label: 'Income statement', aliases: ['income statement'], definition: 'A report showing revenue, costs, and profit over a period such as a quarter or a year.' },
  { id: 'cash-flow-statement', label: 'Cash flow statement', aliases: ['cash flow statement'], definition: 'A report showing how cash moved in and out of the company from operations, investing, and financing.' },
  { id: 'debt-to-equity', label: 'Debt-to-equity ratio', aliases: ['debt-to-equity ratio', 'debt-to-equity', 'D/E ratio'], definition: 'Total debt divided by shareholders’ equity. A high number means the company relies heavily on borrowed money.' },
  { id: 'current-ratio', label: 'Current ratio', aliases: ['current ratio'], definition: 'Assets that turn into cash within a year divided by bills due within a year. Above 1 means it can cover its short-term bills.' },
  { id: 'liquidity', label: 'Liquidity', aliases: ['liquidity'], definition: 'How easily something can be turned into cash. For a company, whether it can pay its bills; for a stock, how easily it can be bought or sold.' },
  { id: 'shares-outstanding', label: 'Shares outstanding', aliases: ['shares outstanding', 'outstanding shares'], definition: 'The total number of a company’s shares owned by all investors.' },
  { id: 'dilution', label: 'Dilution', aliases: ['dilution', 'share dilution'], definition: 'When a company issues new shares, each existing share owns a smaller slice of the company.' },
  { id: 'goodwill', label: 'Goodwill', aliases: ['goodwill'], definition: 'An asset recorded when a company buys another for more than its net assets are worth on paper.' },
  { id: 'moat', label: 'Economic moat', aliases: ['economic moat', 'competitive moat', 'moat'], definition: 'A lasting advantage, such as a strong brand or network, that protects a company’s profits from competitors.' },

  // Dividends and shareholder returns
  { id: 'dividend', label: 'Dividend', aliases: ['dividend'], definition: 'A share of profits that a company pays to its shareholders, usually in cash every quarter.' },
  { id: 'dividend-yield', label: 'Dividend yield', aliases: ['dividend yield'], definition: 'Annual dividends per share divided by the share price. A 3% yield pays $3 a year for every $100 invested.' },
  { id: 'payout-ratio', label: 'Payout ratio', aliases: ['payout ratio'], definition: 'The share of profits paid out as dividends. A very high ratio can mean the dividend is at risk of being cut.' },
  { id: 'ex-dividend-date', label: 'Ex-dividend date', aliases: ['ex-dividend date', 'ex-dividend'], definition: 'You must own the stock before this date to receive the next dividend.' },
  { id: 'buyback', label: 'Share buyback', aliases: ['share buyback', 'stock buyback', 'buyback', 'share repurchase'], definition: 'When a company buys back its own shares. Fewer shares means each remaining share owns more of the company.' },
  { id: 'stock-split', label: 'Stock split', aliases: ['stock split'], definition: 'Dividing each share into several cheaper shares. The company’s total value does not change.' },
  { id: 'total-return', label: 'Total return', aliases: ['total return'], definition: 'Price change plus dividends received. The full gain or loss from owning an investment.' },

  // Market and trading
  { id: 'bull-market', label: 'Bull market', aliases: ['bull market'], definition: 'A long period of rising stock prices, often defined as a 20% rise from a recent low.' },
  { id: 'bear-market', label: 'Bear market', aliases: ['bear market'], definition: 'A drop of 20% or more from a recent high, usually lasting months.' },
  { id: 'correction', label: 'Market correction', aliases: ['market correction', 'correction territory'], definition: 'A drop of 10% to 20% from a recent high. Corrections are common and usually short.' },
  { id: 'volatility', label: 'Volatility', aliases: ['volatility'], definition: 'How much and how fast a price moves up and down. Higher volatility means bigger swings and more risk.' },
  { id: 'beta', label: 'Beta', aliases: ['beta'], definition: 'How much a stock tends to move compared with the overall market. A beta of 1.5 means it moves about 50% more than the market.' },
  { id: 'vix', label: 'VIX', aliases: ['VIX'], definition: 'An index of how much volatility investors expect in the S&P 500. Often called the “fear gauge.”' },
  { id: 'trading-volume', label: 'Trading volume', aliases: ['trading volume'], definition: 'How many shares changed hands in a period. High volume means many investors are actively trading the stock.' },
  { id: '52-week-high', label: '52-week high / low', aliases: ['52-week high', '52-week low'], definition: 'The highest or lowest price a stock has traded at over the past year.' },
  { id: 'all-time-high', label: 'All-time high', aliases: ['all-time high', 'record high'], definition: 'The highest price a stock or index has ever reached.' },
  { id: 'short-selling', label: 'Short selling', aliases: ['short selling', 'short seller', 'short interest'], definition: 'Betting a stock will fall by borrowing shares, selling them, and buying them back later. Losses can be unlimited if the price rises.' },
  { id: 'market-order', label: 'Market order', aliases: ['market order'], definition: 'An order to buy or sell immediately at the best available price.' },
  { id: 'limit-order', label: 'Limit order', aliases: ['limit order'], definition: 'An order to buy or sell only at a set price or better. It may not be filled.' },
  { id: 'stop-loss', label: 'Stop-loss order', aliases: ['stop-loss order', 'stop-loss'], definition: 'An order that sells automatically if the price falls to a set level, to limit losses.' },
  { id: 'bid-ask-spread', label: 'Bid-ask spread', aliases: ['bid-ask spread'], definition: 'The gap between the highest price buyers offer and the lowest price sellers accept.' },
  { id: 'ipo', label: 'IPO (initial public offering)', aliases: ['IPO', 'initial public offering'], definition: 'The first time a company sells its shares to the public on a stock exchange.' },
  { id: 'blue-chip', label: 'Blue-chip stock', aliases: ['blue-chip', 'blue chip'], definition: 'Shares of a large, well-known, financially stable company with a long track record.' },
  { id: 'growth-stock', label: 'Growth stock', aliases: ['growth stock'], definition: 'A stock of a company expected to grow faster than average. It often has a high P/E and pays little or no dividend.' },
  { id: 'value-stock', label: 'Value stock', aliases: ['value stock', 'value investing'], definition: 'A stock that looks cheap compared with its earnings or assets. Value investors buy them hoping the market will recognize their worth.' },
  { id: 'large-cap', label: 'Large-cap / mid-cap / small-cap', aliases: ['large-cap', 'mid-cap', 'small-cap', 'mega-cap', 'micro-cap'], definition: 'Groups companies by market cap. Large-cap is usually over $10 billion, small-cap under $2 billion. Smaller companies tend to be riskier.' },

  // Indexes and funds
  { id: 'sp-500', label: 'S&P 500', aliases: ['S&P 500', 'S&P'], definition: 'An index of about 500 of the largest US public companies. Often used as a benchmark for the whole US stock market.' },
  { id: 'nasdaq', label: 'Nasdaq', aliases: ['Nasdaq Composite', 'Nasdaq'], definition: 'A US stock exchange, and an index of the stocks listed on it. Heavy in technology companies.' },
  { id: 'dow-jones', label: 'Dow Jones Industrial Average', aliases: ['Dow Jones Industrial Average', 'Dow Jones', 'the Dow'], definition: 'An index of 30 large US companies. One of the oldest and most quoted stock market indexes.' },
  { id: 'etf', label: 'ETF (exchange-traded fund)', aliases: ['ETF', 'exchange-traded fund'], definition: 'A fund holding many investments that trades on an exchange like a single stock. Many ETFs track an index.' },
  { id: 'index-fund', label: 'Index fund', aliases: ['index fund'], definition: 'A fund that simply copies a market index such as the S&P 500. Usually low cost and widely recommended for beginners.' },
  { id: 'mutual-fund', label: 'Mutual fund', aliases: ['mutual fund'], definition: 'A fund that pools money from many investors and is run by a professional manager. Priced once a day.' },
  { id: 'expense-ratio', label: 'Expense ratio', aliases: ['expense ratio'], definition: 'The yearly fee a fund charges, as a share of your investment. 0.1% means $1 a year for every $1,000 invested.' },

  // Personal investing
  { id: 'diversification', label: 'Diversification', aliases: ['diversification', 'diversified portfolio'], definition: 'Spreading money across many investments so that one bad investment does not hurt you too much.' },
  { id: 'asset-allocation', label: 'Asset allocation', aliases: ['asset allocation'], definition: 'How you split your money between stocks, bonds, cash, and other assets based on your goals and risk tolerance.' },
  { id: 'dollar-cost-averaging', label: 'Dollar-cost averaging', aliases: ['dollar-cost averaging'], definition: 'Investing a fixed amount on a regular schedule, regardless of price. It avoids trying to time the market.' },
  { id: 'compound-interest', label: 'Compounding', aliases: ['compound interest', 'compounding'], definition: 'Earning returns on your past returns, so growth speeds up over time.' },
  { id: 'capital-gains', label: 'Capital gains', aliases: ['capital gain', 'capital gains tax'], definition: 'Profit from selling an investment for more than you paid. In the US, holding over one year usually means a lower tax rate.' },
  { id: '401k', label: '401(k)', aliases: ['401(k)'], definition: 'A US retirement account offered by employers. Contributions are often tax-advantaged, and many employers add a match.' },
  { id: 'roth-ira', label: 'Roth IRA', aliases: ['Roth IRA'], definition: 'A US retirement account funded with after-tax money. Qualified withdrawals in retirement are tax-free.' },
  { id: 'ira', label: 'IRA (individual retirement account)', aliases: ['IRA', 'individual retirement account'], definition: 'A US retirement account you open yourself, with tax advantages.' },
  { id: 'risk-tolerance', label: 'Risk tolerance', aliases: ['risk tolerance'], definition: 'How much your investments can drop in value without you needing the money or panicking and selling.' },

  // Bonds and the economy
  { id: 'bond', label: 'Bond', aliases: ['bond'], definition: 'A loan you make to a government or company. You receive interest and get your money back at a set date.' },
  { id: 'treasury-yield', label: 'Treasury yield', aliases: ['Treasury yield', '10-year yield', '10-year Treasury'], definition: 'The interest rate the US government pays to borrow. It affects mortgage rates and how investors value stocks.' },
  { id: 'yield-curve', label: 'Yield curve', aliases: ['yield curve', 'inverted yield curve'], definition: 'Interest rates on bonds of different lengths. When short-term rates are higher than long-term rates (inverted), it has often signaled a recession.' },
  { id: 'federal-reserve', label: 'Federal Reserve', aliases: ['Federal Reserve', 'the Fed'], definition: 'The US central bank. It sets short-term interest rates to manage inflation and employment.' },
  { id: 'interest-rate', label: 'Interest rate', aliases: ['interest rate', 'rate cut', 'rate hike', 'federal funds rate'], definition: 'The cost of borrowing money. Lower rates usually help stock prices; higher rates usually hurt them.' },
  { id: 'inflation', label: 'Inflation', aliases: ['inflation', 'CPI', 'consumer price index'], definition: 'The rate at which prices rise over time, which reduces what your money can buy.' },
  { id: 'recession', label: 'Recession', aliases: ['recession'], definition: 'A significant, widespread decline in economic activity lasting more than a few months.' },
  { id: 'gdp', label: 'GDP (gross domestic product)', aliases: ['GDP', 'gross domestic product'], definition: 'The total value of goods and services a country produces. The main measure of economic growth.' },

  // Filings
  { id: 'sec', label: 'SEC (Securities and Exchange Commission)', aliases: ['SEC', 'Securities and Exchange Commission'], definition: 'The US government agency that regulates stock markets and requires public companies to share financial information.' },
  { id: '10-k', label: '10-K', aliases: ['10-K', 'annual report'], definition: 'A detailed annual report that US public companies must file with the SEC, covering their business, risks, and finances.' },
  { id: '10-q', label: '10-Q', aliases: ['10-Q'], definition: 'A quarterly financial report that US public companies file with the SEC.' },
];
