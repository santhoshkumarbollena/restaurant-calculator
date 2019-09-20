document.querySelector('#calculate').addEventListener('click',function(){
    const CostInString=document.querySelector('#cost').value;
     const CostInFloat=parseFloat(CostInString);
     const RateInString=document.querySelector('#rate').value;
     const RateInFloat=parseFloat(RateInString);
     const TipCalculation=CostInFloat*(RateInFloat/100)
     const TaxRate=5.5
     const Tax=CostInFloat*(TaxRate/100)
     const GrandTotal=CostInFloat+TipCalculation+Tax;
     document.querySelector('#TipValue').innerHTML=`$${TipCalculation.toFixed(2)}`
     document.querySelector('#TaxValue').innerHTML=`$${Tax.toFixed(2)}`
     document.querySelector('#TotalValue').innerHTML=`$${GrandTotal.toFixed(2)}`
 })