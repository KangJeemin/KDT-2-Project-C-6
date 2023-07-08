import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch'
import { TextEncoder } from 'util';


@Injectable()
export class AppService {
  getUsers(): string  {
    // 비즈니스 로직을 수행하여 사용자 데이터를 가져온다고 가정
    const users = ['User 1', 'User 2', 'User 3'];

    return JSON.stringify(users)
  }
}

@Injectable()
export class NaverAPI {
  getAPI(): string  {
    const encoder = new TextEncoder();
    // let url ='https://openapi.naver.com/v1/search/blog?/query=rbw'
    let url ='https://openapi.naver.com/v1/search/shop?query='
    let ClientID='vqhMSE8joE5v7eeLQaHt'
    let ClientSecret='EMjd5sI8k9'

    let AppName=encodeURIComponent('rbw')
    console.log(AppName)
    let URL =url + AppName
    console.log(URL)
    let returnData=[{}]
    fetch(URL,{
      method:'GET',
      headers:
        {'X-Naver-Client-Id':ClientID, 'X-Naver-Client-Secret': ClientSecret}
    
      }
    ).then((response) => response.json()).then(data=>{console.log(data)})
    return 'a'
  }
}

