import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  ngOnInit(): void {
  }

  inputHistory:string[] = [];
  isLastInputAnOperator:boolean;

  operate(event: any, inputValue:string = event.target.innerText){

    // assign boolean whether the last input is an operator
    this.isLastInputAnOperator = isNaN(Number(this.inputHistory[this.inputHistory.length - 1]));
    
    // if an operator is input twice in a row, remove the last operator 
    this.validateInput(event, inputValue);

    // if 'inputHistory' is empty and the current input is either '0' or operators, skip operation
    if(this.inputHistory.length === 0 && /[0+*/-]/.test(inputValue)){
      return;    
    }

    // if '0' is entered after operators, skip operation
    if(this.isLastInputAnOperator && inputValue === '0'){
      return;    
    }

    // actual calculation
    if(inputValue === '=' || inputValue === 'Enter'){ // when the user clicks '=' button or hit enter key
      if (this.isLastInputAnOperator) { 
        this.undoInput();
      }
      this.calculateResult();
    } else if (inputValue === 'Clear'){ // when the user clicks 'Clear' button
      this.clearInputHistory();
      this.clearResult();
    } else if (inputValue === 'Undo' || inputValue === 'Backspace' ){  // when the user clicks 'Undo' button or hits backspace key
      this.undoInput();
    } else { // keep adding numbers or operators
      this.displayInputs(inputValue);
    }
  }

  validateInput(event: any, inputValue:string){

    // check if 'inputHistory' is not empty, and whether the last input is an operator
    if (this.inputHistory !== [] && this.isLastInputAnOperator) {
      // check if the current input is an operator
      if(/[+*/-]/.test(inputValue)){
        // remove the last operator
        this.undoInput();
      }
    };
  }

  calculateResult(){
      // check if 'inputHistory' isn't empty
      if(this.inputHistory.length !== 0){

      // first calculation
      let calculatedResult = eval(this.inputHistory.join('')).toString();

      // if there are more than 6 decimal places in the result, omit it and reassign the value to 'calculatedResult' variable. 
      if (calculatedResult.indexOf('.') > -1 && calculatedResult.length - calculatedResult.indexOf('.') > 7) {
        calculatedResult =  Number(calculatedResult).toFixed(6).toString();
      }

      // update the UI
      document.getElementById('result').innerText = calculatedResult;

      this.clearInputHistory();
    }
  }

  // display user's input history before calculation
  displayInputs(input: string){
    this.inputHistory.push(input);
    document.getElementById('input-history').innerText = this.inputHistory.join('');
  }

  // undo user's last input
  undoInput(){
    if (this.inputHistory !== []){
      this.inputHistory.pop();
      document.getElementById('input-history').innerText = this.inputHistory.join('');
    } 
  }

  // clear user's input history
  clearInputHistory(){
    document.getElementById('input-history').innerText = '';
    this.inputHistory = [];
  }

  // clear calculated result
  clearResult(){
    document.getElementById('result').innerText = '';
  }
  
  /*---------------------
    Input from keyboard
  ----------------------*/

  // Get the key value when any key is pressed
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    // accept only number, operators, backspace and enter key
    if(/[=0-9+*-/]|Backspace|Enter/.test(event.key)){
      this.operate(event, event.key);
    }
  }
}
