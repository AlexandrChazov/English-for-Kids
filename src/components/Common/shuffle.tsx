import {CardsBaseKeysType} from "../../redux/cardsBase";
import {CardInfoType} from "../../redux/main-reducer";

function shuffle(arr: Array<any>): Array<CardsBaseKeysType> & Array<CardInfoType> {   //todo
  let newArray = arr.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray.slice(0,8)  // максимальное кол-во карточек на экране - 8
}

export default shuffle;