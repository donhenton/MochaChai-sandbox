var Cow = function(name)
{  
     this.name =  'esmirelda';
    if (name)
    {
        this.name=name;
    } 
        


};

Cow.prototype = {
    
    
    setName: function(name)
    {
        this.name = name;
    },
    
    
    
    greets: function(target) {
      if (!target)
        throw new Error("missing target");
      return this.name + " greets " + target + "!";
    },

    lateGreets: function(target, cb) {
      setTimeout(function(self) {
         
        try {
          if (target && target.toUpperCase() === 'BOZO')
          {
              
                
             throw new Error("No Bozos!")
              
          }
          var info = self.greets(target);
          cb(null,info );
          
        } catch (err) {
         // console.log("XXXXX "+err.message)
          cb(err);
        }
      }, 1000, this);
    }
  };




module.exports = Cow;


