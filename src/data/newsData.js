const newsData = [
	{
		"title": "News 1: Breaking News",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
		"photo": "/placeholder.png"
	},
	{
		"title": "News 2: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/placeholder.png"
	},
	{
		"title": "News 3: Top Story",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/placeholder.png"
	},
	{
		"title": "News 4: Trending Now",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"photo": "/placeholder.png"
	},
	{
		"title": "News 5: Hot Topic",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/placeholder.png"
	},
	{
		"title": "News 6: Breaking News",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/placeholder.png"
	},
	{
		"title": "News 7: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 8: Top Story",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"photo": "/"
	},
	{
		"title": "News 9: Trending Now",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 10: Hot Topic",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 11: Breaking News",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 12: Latest Update",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"photo": "/"
	},
	{
		"title": "News 13: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 14: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 15: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 16: Breaking News",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in",
		"photo": "/"
	},
	{
		"title": "News 17: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 18: Top Story",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"photo": "/"
	},
	{
		"title": "News 19: Trending Now",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 20: Hot Topic",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 21: Breaking News",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 22: Latest Update",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"photo": "/"
	},
	{
		"title": "News 23: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 24: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 25: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 26: Breaking News",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in",
		"photo": "/"
	},
	{
		"title": "News 27: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 28: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 29: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 30: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 31: Breaking News",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in.",
		"photo": "/"
	},
	{
		"title": "News 32: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 33: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 34: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 35: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 36: Breaking News",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in.",
		"photo": "/"
	},
	{
		"title": "News 37: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 38: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 39: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 40: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 41: Breaking News",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in.",
		"photo": "/"
	},
	{
		"title": "News 42: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 43: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 44: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 45: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 46: Breaking News",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in.",
		"photo": "/"
	},
	{
		"title": "News 47: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 48: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 49: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 50: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 51: Breaking News",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in.",
		"photo": "/"
	},
	{
		"title": "News 52: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 53: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 54: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 55: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 56: Breaking News",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in.",
		"photo": "/"
	},
	{
		"title": "News 57: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 58: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 59: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
	{
		"title": "News 60: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"photo": "/"
	},
]

export default newsData;
