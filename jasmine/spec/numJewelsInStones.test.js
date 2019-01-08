describe("Number of Jewels In Stones", function(){
    
    it("There are no Jewels in Stones", function(){
        
        expect(numJewelsInStones("wer", "vvhghWER")).toEqual(0);
        expect(numJewelsInStones("uiijkmnh", "aaaaaaaabbbbbbbbccccc")).toEqual(0);
    })

    it("There are Jewels in Stones ", function(){
        
        expect(numJewelsInStones("a", "AaA")).toEqual(1);
        expect(numJewelsInStones("A", "AaA")).toEqual(2);
        expect(numJewelsInStones("aA", "AaA")).toEqual(3);
        expect(numJewelsInStones("baA", "AaA")).toEqual(3);
        
    })

   
})