$scope.calculateEmi = function() {
        console.log('Calculate EMI');
        
        //  Preset values
        // $scope.emi.loanAmount = 260000;
        // $scope.emi.interest = 10.2;
        // $scope.emi.months = 36;

        console.log($scope.emi);

        // var r = 0,
        //     months = 0,
        //     emi = '';

        // months = $scope.emi.months;
        
        // r = ($scope.emi.interest / months) / 100;
        // n = months;
        // emi = ($scope.emi.loanAmount * r * ( (1 + r) * n ) )/ ( (1 + r) * n  - 1);
        // console.log(emi);
        console.log($scope.emi.periodSelected);
        var loanAmount = $scope.emi.loanAmount,
            numberOfMonths = 0,
            rateOfInterest = $scope.emi.interest,
            monthlyInterestRatio = rateOfInterest / 100 / 12,
            top, bottom, sp, emi, full, interest, int_pge;

        numberOfMonths = $scope.emi.months;
		top = Math.pow(1 + monthlyInterestRatio, numberOfMonths);
		bottom = top - 1;
        sp = top / bottom;
        emi = loanAmount * monthlyInterestRatio * sp;
        
        full = numberOfMonths * emi;
		interest = full - loanAmount;
		int_pge = interest / full * 100;
        
        //$("#tbl_int_pge").html(int_pge.toFixed(2) + " %");
		//$("#tbl_loan_pge").html((100-int_pge.toFixed(2))+" %");

		var emi_str = emi
			.toFixed(2)
			.toString()
			.replace(/,/g, "")
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		var loanAmount_str = loanAmount
			.toString()
			.replace(/,/g, "")
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		var full_str = full
			.toFixed(2)
			.toString()
			.replace(/,/g, "")
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		var int_str = interest
			.toFixed(2)
			.toString()
			.replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            
        console.log(emi);
        console.log(emi_str);
        console.log(loanAmount_str);
    };

number2text(value) {
    var fraction = Math.round(this.frac(value)*100);
    var f_text  = "";

    if(fraction > 0) {
        f_text = "And "+this.convert_number(fraction)+" Paise";
    }

    return this.convert_number(value)+" Rupee "+f_text+" Only";
}

frac(f) {
    return f % 1;
}

convert_number(number)
{
    if ((number < 0) || (number > 999999999)) 
    { 
        return "Number Out of Range!";
    }
    var Gn = Math.floor(number / 10000000);  /* Crore */ 
    number -= Gn * 10000000; 
    var kn = Math.floor(number / 100000);     /* lakhs */ 
    number -= kn * 100000; 
    var Hn = Math.floor(number / 1000);      /* thousand */ 
    number -= Hn * 1000; 
    var Dn = Math.floor(number / 100);       /* Tens (deca) */ 
    number = number % 100;               /* Ones */ 
    var tn= Math.floor(number / 10); 
    var one=Math.floor(number % 10); 
    var res = ""; 

    if (Gn>0) 
    { 
        res += (this.convert_number(Gn) + " Crore"); 
    } 
    if (kn>0) 
    { 
            res += (((res=="") ? "" : " ") + 
            this.convert_number(kn) + " Lakh"); 
    } 
    if (Hn>0) 
    { 
        res += (((res=="") ? "" : " ") +
            this.convert_number(Hn) + " Thousand"); 
    } 

    if (Dn) 
    { 
        res += (((res=="") ? "" : " ") + 
            this.convert_number(Dn) + " Hundred"); 
    } 


    var ones = Array("", "One", "Two", "Three", "Four", "Five", "Six","Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen","Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen","Nineteen"); 
    var tens = Array("", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty","Seventy", "Eighty", "Ninety"); 

    if (tn>0 || one>0) 
    { 
        if (!(res=="")) 
        { 
            res += " And "; 
        } 
        if (tn < 2) 
        { 
            res += ones[tn * 10 + one]; 
        } 
        else 
        { 

            res += tens[tn];
            if (one>0) 
            { 
                res += ("-" + ones[one]); 
            } 
        } 
    }

    if (res=="")
    { 
        res = "zero"; 
    } 
    return res;
  }
