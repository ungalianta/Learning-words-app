import style from "./WordsTable.module.css";

import { useState } from "react";

export const WordsTableRow = ({ word }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit((prevValue) => !prevValue);
  };
  
  const handleCancel = () => {
    setIsEdit((prevValue) => !prevValue);
  }
  
  const handleSave = () => {
    setIsEdit((prevValue) => !prevValue);
  }

  return (
    <tr className={style.row}>
      <td className={style.column}>
        {isEdit ? <input value={word.english} /> : word.english}
      </td>
      <td className={style.column}>
        {isEdit ? <input value={word.english} /> : word.transcription}
      </td>
      <td className={style.column}>
        {isEdit ? <input value={word.english} /> : word.russian}
      </td>
      <td>
        {isEdit && (
          <>
            <button onClick={handleSave}>Сохранить</button>
            <button onClick={handleCancel}>Отмена</button>
          </>
        )}
        {!isEdit && <button onClick={handleEdit}>Редактировать</button>}
        {isEdit && <button>Удалить</button>}
      </td>
    </tr>
  );
};
