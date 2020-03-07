import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currentNumber = '0';// the string that will be displayed in the result input element
  firstOperand = null;//the value of the first operand of the operation.
  operator = null;//holds the operation.
  waitForSecondNumber = false;
  //boolean value indicating if the user has finished typing the first operand and ready to enter the second operand of the operation.
  public getNumber(v: any){
    console.log(v);
    if(this.waitForSecondNumber){
      this.currentNumber=v;
      this.waitForSecondNumber=false;
    }
    else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber +=v;
    }
  }
  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }
  private doCalculation(op: any , secondOp: number){
    switch (op){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp; 
      case '=':
      return secondOp;
    }
  }
  public getOperation(op: string){
    console.log(op);

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }
  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
