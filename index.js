import fetch from "node-fetch";
import * as cheerio from "cheerio";

const options = {
  method: "POST",
  headers: {
    Accept: "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "en-US,en;q=0.9",
    Connection: "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Cookie:
      "_ga=GA1.1.2045805920.1666146331; XSRF-TOKEN=eyJpdiI6IjBpdkVWSVRYMUlsbzFiMTNmV09SblE9PSIsInZhbHVlIjoieHRcL1ZUQjlrY2lKeDlKZUtPaDhTZjY0NUxGSmZJK3VKRjJ1V0hkSmo4VVBVYzhxSHdqWUJrbUFhb2tCdVlaaGh3YStTVkM4dmtBMWlGVGtBd29nb0ZCRk1YVGR4ZlVUdFZ5M3hkOFZUdWQwdmhrNTczdTJYYnFpazdEekppbVwvWSIsIm1hYyI6ImY4ZjRlNWQ3ZDc4ZDAxNTI3MTNjMTY5MThjYzQ4NDc4NTBhNmFjODUyYjgwZmU5MWI2NjNmNmZlZTM0YmFlYWMifQ%3D%3D; laravel_session=eyJpdiI6IkZmUVoxbzBcLzJPNUQzZDlKTGhEM3R3PT0iLCJ2YWx1ZSI6IjlhcGkxeWlLREo2SUZndHZlWU5IN3BwSWpENldWbGhXY2hLckFwemlFVDZyUlY0TkNDc1lqSHlxUEowODVJbHlsOEJJWGo3ekRsaFVnZkZCd3cweEd2YzJZRyt1QVAwYVM0YlR0dlhhbVRJUnF2WlVyM3NaeWhpRkgyMlZKd0NuIiwibWFjIjoiZTlhMGM5ZjNmNDg0ZGU2YTY1YzAyNDA4Y2Y1ZjVkNTk0M2Y1NTA2MTFlNGQyZjUyYTc3ZGNmZDkyMWFhNTQ4YSJ9; _ga_5PV2DTG833=GS1.1.1666146330.1.1.1666146878.0.0.0; _ga_8Y2ZRDLJ1F=GS1.1.1666146332.1.1.1666146878.0.0.0; _ga_ZGZZNKE34S=GS1.1.1666146331.1.1.1666146878.0.0.0",
    Origin: "https://www.unaminternacional.unam.mx",
    Referer: "https://www.unaminternacional.unam.mx/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
    "X-CSRF-TOKEN": "AeyUrUlJFxNVt7PoRCmoHDsHsKBNABpYUPareRRY",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua":
      '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
  },
  body: new URLSearchParams({
    consulta: "print_convocatorias",
    id: "alumnos-internacional",
    f: "8",
    _token: "AeyUrUlJFxNVt7PoRCmoHDsHsKBNABpYUPareRRY",
  }),
};

const getAvailablePrograms = async () => {
  try {
    const response = await fetch(
      "https://www.unaminternacional.unam.mx/ajaxdgeci",
      options
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      parseRawHtml(jsonResponse["mensaje"]);
    }
  } catch (err) {
    console.log(err);
  }
};

const parseRawHtml = (html) => {
  const $ = cheerio.load(html);
  $(".col-sm-4", html).each(function () {
    console.log($("h5", this).text());
  });
};

getAvailablePrograms();
