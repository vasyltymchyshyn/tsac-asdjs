function QueueItem(i, p) {
    this.item = i;
    this.priority = p;
}

function PriorityQueue() {
    this.queue = [];
}

PriorityQueue.prototype.enqueue = function(e) {

        var i =0; 
        var falso=false;

        if(!this.isEmpty())
        {
               
            while(!falso){

               
                if(i>=this.size()){
                    falso=true;
                }
                else if(this.queue[i].priority> e.priority){

                    
                  
                   falso=true;
                }else{
                   
                    i++;
                }
            }
            
            this.queue.splice(i,0,e);
           
                            
        }else{
          
            this.queue.unshift(e);}
        
        


                         }
PriorityQueue.prototype.dequeue = function() { return this.queue.pop(); }
PriorityQueue.prototype.front = function() { return this.queue[this.queue.length - 1]; }
PriorityQueue.prototype.size = function() { return this.queue.length; }
PriorityQueue.prototype.isEmpty = function() { return this.size() == 0; }


function PriorityQueueCallback(f){
    this.f=f;
}


PriorityQueueCallback.prototype.enqueue = function(e) {

        var i =0; 
        var falso=false;

        if(!this.isEmpty())
        {
               
            while(!falso){

               
                if(i>=this.size()){
                    falso=true;
                }
                else if(this.f(this.queue[i].priority> e.priority==1)){

                    
                  
                   falso=true;
                }else{
                   
                    i++;
                }
            }
            
            this.queue.splice(i,0,e);
           
                            
        }else{
          
            this.queue.unshift(e);}
        
        


                         }
PriorityQueueCallback.prototype.dequeue = function() { return this.queue.pop(); }
PriorityQueueCallback.prototype.front = function() { return this.queue[this.queue.length - 1]; }
PriorityQueueCallback.prototype.size = function() { return this.queue.length; }
PriorityQueueCallback.prototype.isEmpty = function() { return this.size() == 0; }

