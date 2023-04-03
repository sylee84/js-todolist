const quotes = [
    {
        quote:'언제나 현재에 집중할수 있다면 행복할것이다. - ',
        author:'파울로 코엘료'
    },
    {
        quote:'직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 - ',
        author:'엘버트 허버드'
    },
    {
        quote:'신은 용기있는자를 결코 버리지 않는다 - ',
        author:'켄러'
    },
    {
        quote:'행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다 - ',
        author:'헬렌켈러'
    },
    {
        quote:'너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다 - ',
        author:'랄프 왈도 에머슨'
    },
    {
        quote:'한번의 실패와 영원한 실패를 혼동하지 마라 - ',
        author:'F.스콧 핏제랄드'
    },
    {
        quote:'계단을 밟아야 계단 위에 올라설수 있다 - ',
        author:'터키속담'
    },
    {
        quote:'오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다 - ',
        author:'앙드레 말로'
    },
    {
        quote:'좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다 - ',
        author:'단테'
    },
    {
        quote:'행복은 습관이다,그것을 몸에 지니라 - ',
        author:'허버드'
    },
    {
        quote:'행운은 준비된 자를 좋아한다 - ',
        author:'인크레더블'
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;