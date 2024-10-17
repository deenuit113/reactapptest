import ExpenseItem from "./ExpenseItem"

export const ExpenseList = ({ initialExpenses, handleDelete, handleEdit, clearItems }) => {
    return (
        <>
            <ul>
                {
                    initialExpenses.map((expense) => (
                        <ExpenseItem 
                            expense={expense}
                            key={expense.id}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit} edit
                        />
                    ))
                }
            </ul>
            <button onClick={clearItems}>목록지우기</button>
        </>

    )
}

export default ExpenseList;