 var justUD = 100;
 var justLR = 50;
 var touchFact = {
	LeftMoveCnt: 0,
	RightMoveCnt: 0,
	DownMoveCnt: 0,
	ChangeMoveCnt: 0,
	addLeft: function(){
		//this.LeftMoveCnt = 0;
		this.RightMoveCnt = 0;
		this.DownMoveCnt = 0;
		this.ChangeMoveCnt = 0;
		if (this.LeftMoveCnt < 7) {
			this.LeftMoveCnt++;
		}
	},
	addRight: function(){
		this.LeftMoveCnt = 0;
		//this.RightMoveCnt = 0;
		this.DownMoveCnt = 0;
		this.ChangeMoveCnt = 0;
		if (this.RightMoveCnt < 7) {
			this.RightMoveCnt++;
		}
	},
	addChange: function(){
		this.LeftMoveCnt = 0;
		this.RightMoveCnt = 0;
		this.DownMoveCnt = 0;
		//this.ChangeMoveCnt = 0;
		if (this.ChangeMoveCnt < 1) {
			this.ChangeMoveCnt++;
		}
	},
	addDown: function(){
		this.LeftMoveCnt = 0;
		this.RightMoveCnt = 0;
		//this.DownMoveCnt = 0;
		this.ChangeMoveCnt = 0;
		if (this.DownMoveCnt < 7) {
			this.DownMoveCnt++;
		}
	},
	removeLeft: function(){
		if (this.LeftMoveCnt > 0) {
			this.LeftMoveCnt--;
		}
	},
	removeRight: function(){
		if (this.RightMoveCnt > 0) {
			this.RightMoveCnt--;
		}
	},
	removeChange: function(){
		if (this.ChangeMoveCnt > 0) {
			this.ChangeMoveCnt--;
		}
	},
	removeDown: function(){
		if (this.DownMoveCnt > 0) {
			this.DownMoveCnt--;
		}
	}
};
    (function(){
	
		var LSwiperMaker = function(o){
		
			var that = this;
			this.config = o;
			this.control = false;
			this.sPos = {};
			this.mPos = {};
			this.lPos = {};
			this.tempLR = 0;
			this.tempUD = 0;
			this.dire;
			
			this.config.bind.addEventListener('touchstart', function(e){
				return that.start(e);
			}, false);
			this.config.bind.addEventListener('touchmove', function(e){
				return that.move(e);
			}, false);
			this.config.bind.addEventListener('touchend', function(e){
				return that.end(e);
			}, false);
			
		};
		
		LSwiperMaker.prototype.start = function(e){
			var point = e.touches ? e.touches[0] : e;
			this.sPos.x = point.screenX;
			this.sPos.y = point.screenY;
			this.lPos.x = point.screenX;
			this.lPos.y = point.screenY;
			
		};
		LSwiperMaker.prototype.move = function(e){
			var point = e.touches ? e.touches[0] : e;
			this.control = true;
			this.mPos.x = point.screenX;
			this.mPos.y = point.screenY;
			this.tempLR = this.tempLR + point.screenX - this.lPos.x;
			this.tempUD = this.tempUD + point.screenY - this.lPos.y;
			this.lPos.x = point.screenX;
			this.lPos.y = point.screenY;
			if (Math.abs(this.tempLR) >= justLR) {
				if (this.tempLR > 0) {
					touchFact.addRight();
					this.tempLR = this.tempLR - justLR * 1.4;
				}
				else {
					touchFact.addLeft();
					this.tempLR = this.tempLR + justLR * 1.4;
				}
				this.tempUD = 0;
			}
			if (Math.abs(this.tempUD) >= justUD) {
				if (this.tempUD > 0) {
					touchFact.addDown();
					this.tempUD = this.tempUD - justUD * 0.3;
				}
				else {
					touchFact.addChange();
					this.tempUD = this.tempUD + justUD;
				}
				this.tempLR = 0;
			}
			document.getElementById("left").innerHTML = touchFact.LeftMoveCnt + ":" + this.tempLR;
			document.getElementById("right").innerHTML = touchFact.RightMoveCnt + ":" + this.tempLR;
			document.getElementById("change").innerHTML = touchFact.ChangeMoveCnt + ":" + this.tempUD;
			document.getElementById("down").innerHTML = touchFact.DownMoveCnt + ":" + this.tempUD;
		};
		
		LSwiperMaker.prototype.end = function(e){
			this.tempRL = 0;
			this.tempUD = 0;
			//this.config.dire_h  && (!this.control ? this.dire = null : this.mPos.x > this.sPos.x ? this.dire = 'R' : this.dire = 'L');
			//this.config.dire_h  || (!this.control ? this.dire = null : this.mPos.y > this.sPos.y ? this.dire = 'D' : this.dire = 'U');
			this.control = false;
			this.config.backfn(this);
			
		};
		
		window.LSwiperMaker = LSwiperMaker;
		document.addEventListener('touchmove', function(e){
			e.preventDefault();
		}, false);// ��ֹ΢��touchmove��ͻ
	}());
 