export const getResults = async (fromLanguage: string, toLanguage: string, query: string): Promise<any> => {
    console.log('SEARCH: ', query);
  
    const response = await fetch(
      `http://stratus.dsd.sztaki.hu:26101/hubla/rest/dicts/${fromLanguage}-${toLanguage}-sztaki-dict/search?searchWord=${query}&searchMode=word_prefix`
    );
  
    const data = await response.json();
    return data;
  };