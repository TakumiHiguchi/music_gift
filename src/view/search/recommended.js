import React from 'react';
import { 
  Link, 
  withRouter
} from "react-router-dom";

const data =[
  {title:"死への誘惑や欲望は物語にどう作用するのか【YOASOBI/夜に駆ける】の歌詞の意味を徹底解釈",
  url:"https://music.branchwith.com/element/music/RnAViGWuedkM9Yce6EjG",
  image_url:"https://i.ytimg.com/vi/x8VYWazR5mE/hqdefault.jpg"
  },
  {title:"【あいみょん/猫】の歌詞の意味を徹底解釈 | あいみょんが猫に込めた想いとは",
  url:"https://music.branchwith.com/element/music/zwiXXYCtQwxi0VIAw2qS",
  image_url:"https://i.ytimg.com/vi/VRfvTcuizQY/hqdefault.jpg"
  },
  {title:"【King Gnu/白日】の歌詞の意味を徹底解釈 | 常田さんの「罪」への価値観が恐ろしすぎる！",
  url:"https://music.branchwith.com/element/music/sGbBowyXYTdCUNKGoxFC",
  image_url:"https://i.ytimg.com/vi/ony539T074w/hqdefault.jpg"
  },
  {title:"【米津玄師/Lemon】歌詞の意味を解釈 | 二人の主人公が繰り広げる切ないストーリー！",
  url:"https://music.branchwith.com/element/music/hIPHwCrOnjuk8UW5dauT",
  image_url:"https://i.ytimg.com/vi/SX_ViT4Ra7k/hqdefault.jpg"
  },
  {title:"【Official髭男dism/115万キロのフィルム】の歌詞の意味を徹底解釈 | 115万キロの意味は？距離に込められた想いとは",
  url:"https://music.branchwith.com/element/music/KJEbImLw16Xa90X7fYjr",
  image_url:"https://i.ytimg.com/vi/ljDRzQz3ULE/hqdefault.jpg"
  },
  {title:"逝かないで欲しかったな... ヨルシカ「ただ君に晴れ」の歌詞の意味を徹底解釈",
  url:"https://music.branchwith.com/element/music/ZUV1bbx1eMGeJrhyTg0e",
  image_url:"https://i.ytimg.com/vi/-VKIqrvVOpo/hqdefault.jpg"
  },
  {title:"【ヨルシカ/だから僕は音楽を辞めた】の歌詞の意味を徹底解釈 | エルマの正体は？エルマ≒音楽の可能性",
  url:"https://music.branchwith.com/element/music/RnAViGWuedkM9Yce6EjG",
  image_url:"https://i.ytimg.com/vi/KTZ-y85Erus/hqdefault.jpg"
  },
  {title:"死への誘惑や欲望は物語にどう作用するのか【YOASOBI/夜に駆ける】の歌詞の意味を徹底解釈",
  url:"https://music.branchwith.com/element/music/RnAViGWuedkM9Yce6EjG",
  image_url:"https://i.ytimg.com/vi/x8VYWazR5mE/hqdefault.jpg"
  },
  {title:"死への誘惑や欲望は物語にどう作用するのか【YOASOBI/夜に駆ける】の歌詞の意味を徹底解釈",
  url:"https://music.branchwith.com/element/music/RnAViGWuedkM9Yce6EjG",
  image_url:"https://i.ytimg.com/vi/x8VYWazR5mE/hqdefault.jpg"
  },
  {title:"死への誘惑や欲望は物語にどう作用するのか【YOASOBI/夜に駆ける】の歌詞の意味を徹底解釈",
  url:"https://music.branchwith.com/element/music/RnAViGWuedkM9Yce6EjG",
  image_url:"https://i.ytimg.com/vi/x8VYWazR5mE/hqdefault.jpg"
  },
]

function Recommended() {
  return (
    <div className="data scroll-y">
      <a className="searchRecommendedTopImage no-select">
        <img src='https://colorido.co.jp/wp-content/uploads/2020/03/cb65bded867ed46c1bb6c48627d86f31.jpg' />
      </a>
      {[...Array(10)].map((_,index)=>
        <a className="RecommendedList flex" href={data[index].url}>
          <div className="content">
            <p className="label">歌詞考察・おすすめ</p>
            <p className="title">{data[index].title}</p>
            <a href="https://music.branchwith.com/" className="domain">music.branchwith.com</a>
          </div>
          <div className="image">
            <img src={data[index].image_url} />
          </div>
        </a>
      )}
    </div>
  );
}
//css
export default withRouter(Recommended);
