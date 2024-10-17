import { MdEdit, MdDelete } from 'react-icons/md'

export const  ExpenseItem = ({ expense, handleEdit, handleDelete}) => {
    return (
        <li>
            <div>
                <span>
                    {expense.charge}
                </span>
                <span>
                    {expense.amount}원
                </span>
            </div>
            <div>
                <button>
                    <MdEdit onClick={()=>handleEdit(expense.id)}/>
                </button>
                <button onClick={()=> handleDelete(expense.id)}>
                    <MdDelete/>
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem;