class MinMax {
    constructor(numbers) {
        this._numbers = numbers;
    }
    
    findMinMax () {
        let max = this._numbers[0];
        let min = this._numbers[0];

        for(let index = 1; index < this._numbers.length; index++)
            if( this._numbers[index] >= max) {
                max = this._numbers[index];
              
            }
            else if (this._numbers[index] <= min) {
                min = this._numbers[index];
            }
        
        return [max, min];
    }

    
    removeMax(){
        const numbs= this.findMinMax();
        
        var pos = this._numbers.indexOf(numbs[0]);
        var newArray = this._numbers.splice(pos, 1);
        return this._numbers;
    }
}

    let array = [1,4,-5,-4,30,2];  

    const range = new MinMax(array); 
    console.log(range.findMinMax());
    console.log(range.removeMax());
    
    console.log(array);



//neeed:
//constructor(numbers)// constructor stoes an array of numbers in a member variable called numbers - using a setter method?
//findMinMax()//this function returns an array that holds the minimum and maximum values of numbers
//removeMax()//removes the first instance of the maximun value in numbers and returns the member variable