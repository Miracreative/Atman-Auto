const newsData = [
	{
		"title": "News 1: Breaking News",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
		"src": "/NewsSlider/mocknew.png",
		"id": 1
	},
	{
		"title": "News 2: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/NewsSlider/mocknew2.png",
		"id": 2
	},
	{
		"title": "News 3: Top Story",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/NewsSlider/mocknew2.png",
		"id": 3
	},
	{
		"title": "News 4: Trending Now",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/NewsSlider/mocknew.png",
		"id": 4
	},
	{
		"title": "News 5: Hot Topic",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 5
	},
	{
		"title": "News 6: Breaking News",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 6
	},
	{
		"title": "News 7: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 7
	},
	{
		"title": "News 8: Top Story",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 8
	},
	{
		"title": "News 9: Trending Now",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 9
	},
	{
		"title": "News 10: Hot Topic",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 10
	},
	{
		"title": "News 11: Breaking News",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 11
	},
	{
		"title": "News 12: Latest Update",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 12
	},
	{
		"title": "News 13: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 13
	},
	{
		"title": "News 14: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 14
	},
	{
		"title": "News 15: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 15
	},
	{
		"title": "News 16: Breaking News",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in",
		"src": "/placeholder.png",
		"id": 16
	},
	{
		"title": "News 17: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 17
	},
	{
		"title": "News 18: Top Story",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 18
	},
	{
		"title": "News 19: Trending Now",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 19
	},
	{
		"title": "News 20: Hot Topic",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 20
	},
	{
		"title": "News 21: Breaking News",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 21
	},
	{
		"title": "News 22: Latest Update",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 22
	},
	{
		"title": "News 23: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 23
	},
	{
		"title": "News 24: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 24
	},
	{
		"title": "News 25: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 25
	},
	{
		"title": "News 26: Breaking News",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 26
	},
	{
		"title": "News 27: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 27
	},
	{
		"title": "News 28: Top Story",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 28
	},
	{
		"title": "News 29: Trending Now",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 29
	},
	{
		"title": "News 30: Hot Topic",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 30
	},
	{
		"title": "News 31: Breaking News",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 31
	},
	{
		"title": "News 32: Latest Update",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 32
	},
	{
		"title": "News 33: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 33
	},
	{
		"title": "News 34: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 34
	},
	{
		"title": "News 35: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 35
	},
	{
		"title": "News 36: Breaking News",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 36
	},
	{
		"title": "News 37: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 37
	},
	{
		"title": "News 38: Top Story",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 38
	},
	{
		"title": "News 39: Trending Now",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 39
	},
	{
		"title": "News 40: Hot Topic",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 40
	},
	{
		"title": "News 41: Breaking News",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 41
	},
	{
		"title": "News 42: Latest Update",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 42
	},
	{
		"title": "News 43: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 43
	},
	{
		"title": "News 44: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 44
	},
	{
		"title": "News 45: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 45
	},
	{
		"title": "News 46: Breaking News",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 46
	},
	{
		"title": "News 47: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 47
	},
	{
		"title": "News 48: Top Story",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 48
	},
	{
		"title": "News 49: Trending Now",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 49
	},
	{
		"title": "News 50: Hot Topic",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 50
	},
	{
		"title": "News 51: Breaking News",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 51
	},
	{
		"title": "News 52: Latest Update",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 52
	},
	{
		"title": "News 53: Top Story",
		"description": "Maecenas sed diam eget risus varius bland it sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 53
	},
	{
		"title": "News 54: Trending Now",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 54
	},
	{
		"title": "News 55: Hot Topic",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 55
	},
	{
		"title": "News 56: Breaking News",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 56
	},
	{
		"title": "News 57: Latest Update",
		"description": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
		"src": "/placeholder.png",
		"id": 57
	},
	{
		"title": "News 58: Top Story",
		"description": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 58
	},
	{
		"title": "News 59: Trending Now",
		"description": "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 59
	},
	{
		"title": "News 60: Hot Topic",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"src": "/placeholder.png",
		"id": 60
	},
]

export default newsData;
