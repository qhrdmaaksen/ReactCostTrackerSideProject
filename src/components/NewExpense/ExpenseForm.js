import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	/*const [userInput, setUserInput] = useState({ 요로케 사용하기도함 state 들을 묶어서
		EnteredTitle: '',
		EnteredAmount: '',
		EnteredDate: '',
	})*/

	const titleChangeHandler = (event) => {
		/*setUserInput({
			...userInput,
			EnteredTitle: event.target.value,
		})*/
		/*setUserInput((prevState) => { 카운터같은 이전 상태를 의존하고있는 경우 사용
			return {...prevState, enteredTitle: event.target.value};
		})*/
		setEnteredTitle(event.target.value);
	}
	const amountChangeHandler = (event) => {
		/*setUserInput({
			...userInput,
			EnteredAmount: event.target.value,
		})*/
		setEnteredAmount(event.target.value);
	}
	const dateChangeHandler = (event) => {
		/*setUserInput({
			...userInput,
			EnteredDate: event.target.value,
		})*/
		setEnteredDate(event.target.value);
	}
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount + ' 원',
			date: new Date(enteredDate),
		}
		console.log(expenseData)
		// 입력 타이틀 금액 날짜 초기화
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	}
	return (
			<form action="" onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input type="number" value={enteredAmount} min="0" step="10" onChange={amountChangeHandler}/>
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input type="date" value={enteredDate} min="1950-01-01" max="2022-06-10" onChange={dateChangeHandler}/>
					</div>
				</div>
				<div className="new-expense__actions">
					<button type="submit">비용 추가</button>
				</div>
			</form>
	)
}
export default ExpenseForm;