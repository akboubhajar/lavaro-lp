class SearchForm extends HTMLElement{constructor(){super(),this.input=this.querySelector('input[type="search"]'),this.resetButton=this.querySelector('button[type="reset"]'),this.input&&(this.input.form.addEventListener("reset",this.onFormReset.bind(this)),this.input.addEventListener("input",debounce(event=>{this.onChange(event)},300).bind(this)))}toggleResetButton(){const resetIsHidden=this.resetButton.classList.contains("hidden");this.input.value.length>0&&resetIsHidden?this.resetButton.classList.remove("hidden"):this.input.value.length===0&&!resetIsHidden&&this.resetButton.classList.add("hidden")}onChange(){this.toggleResetButton()}shouldResetForm(){return!document.querySelector('[aria-selected="true"] a')}onFormReset(event){event.preventDefault(),this.shouldResetForm()&&(this.input.value="",this.input.focus(),this.toggleResetButton())}}customElements.define("search-form",SearchForm);
//# sourceMappingURL=/cdn/shop/t/6/assets/search-form.js.map?v=133129549252120666541727166572
