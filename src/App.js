import './App.css';
import { firestore } from './firebase';
import { useEffect } from 'react';
// 문서의 특정 필드를 삭제하고 싶으면 꼭 import 하기
import firebase from "firebase/compat/app"

function App() {

  useEffect(() => {
    // bucket이라는 변수로 firestore의 collection인 bucket에 접근
    const bucket = firestore.collection("bucket");

    /* 콜렉션에서 지정한 문서 가져오기
    // collection의 document인 "bucket_item"을 가져온다.
    bucket.doc("bucket_item").get().then((doc) => {

      // document의 데이터를 가져옴
      console.log(doc.data());
      // document의 id를 가져옴
      console.log(doc.id);
    });
    */
   
    /* 콜렉션의 모든 문서 가져오기
    bucket.get().then((docs) => {
      // 반복문으로 docuemnt 하나씩 확인
      docs.forEach((doc) => {
        if (doc.exists) {
          // document의 데이터
          console.log(doc.data());
          // document의 id
          console.log(doc.id);
        }
      });
    });
    */
    // bucket 콜렉션의 info 문서에 {name: 'duck';, height: 180} 데이터 추가.
    // 새로 만들거나 덮어쓰기
    // bucket.doc("info").set({ name: 'duck', height: 180 });

    // bucket 콜렉션에 {text: "꿀잠 자기", completed: true} 데이터를 추가한다.
    // document를 지정하지 않았기 때문에 랜덤으로 document와 id가 생성되고 값이 저장됨.
    // bucket.add({ text: "꿀잠 자기", completed: true });

    // 기존 데이터 { name: 'duck', height: 180 }
    // bucket 콜렉션의 bucket_item 문서의 name 필드 duck2로 바꾸기
    // bucket.doc("bucket_item").update({ name: 'duck2' })

    // 기존 데이터 { name: 'duck', height: 180 }
    // bucket 콜렉션의 bucket_item 문서에 값이 'game'인 hobby 필드 추가
    // bucket.doc("bucket_item").update({ hobby: 'game' });

    // 기존 데이터 { name: 'duck', a:{b: 1, c: 2} }
    // bucket 콜렉션의 bucket_item 문서의 필드 a에서 b 요소를 3으로 바꿈
    // bucket.doc("bucket_item").update({ "a.b": 3 });

    // bucket 콜렉션의 bucket_item 문서 삭제
    //bucket.doc("bucket_item").delete();

    // bucket 콜렉션의 bucket_item 문서에서 name 필드 삭제하기
    // bucket.doc("bucket_item").update({ name: firebase.firestore.FieldValue.delete() });

  });

  return (
    <div className="App">
      firebase 확인해보기!
    </div>
  );
}

export default App;