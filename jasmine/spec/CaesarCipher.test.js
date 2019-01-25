describe("Caesar Cipher", function(){
    
   it("Caesar Cipher without special simbols", function(){
        
        expect(rot13("SERR PBQR PNZC")).toEqual('FREE CODE CAMP');
      
    })

    it("Caesar Cipher with special simbols", function(){
        
        expect(rot13("SERR YBIR?")).toEqual('FREE LOVE?');
        expect(rot13("SERR CVMMN!")).toEqual('FREE PIZZA!');
        expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toEqual('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
       
    })

   
})