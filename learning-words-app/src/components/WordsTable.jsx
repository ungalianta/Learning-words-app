
import { learningWords} from '../data/learningWords'
import { WordsTableRow } from './WordsTableRow'
import style from './WordsTable.module.css'

export const WordsTable = () => {
    console.log("WordsTable rendered"); 
  return (
    <table className={style.table}>
        <thead>
           <tr className={style.headerRow}>
            <th className={style.headerCell}>Слово</th>
            <th className={style.headerCell}>Транскрипция</th>
            <th className={style.headerCell}>Перевод</th>
           </tr>
        </thead>
        <tbody>
            {learningWords.map((word, index)=>
            <WordsTableRow key={index} word={word}/>)}
        </tbody>
    </table>
  )
}
