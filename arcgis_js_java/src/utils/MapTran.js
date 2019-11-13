import WKTUtil from './WKTUtil'
/**
 *wkt转化成arcgis的Point对象
 * @param wkt
 * @returns {Polyline}
 * @constructor
 */
export function WktToPoint(wkt,spatialreference){
    var wktUtil = new WKTUtil();
    var pt = wktUtil.read(wkt);
    var json = {
        x:pt[0],
        y:pt[1],
        spatialReference: spatialreference
    }
    var point = new esri.geometry.Point(json);
    return point;
}
/**
 *wkt转化成arcgis的Polyline对象
 * @param wkt
 * @returns {Polyline}
 * @constructor
 */
export function WktToPolyline(wkt, spatialreference){
    var wktUtil = new WKTUtil();
    var points = wktUtil.read(wkt);
    var json = {
        paths: [points],
        spatialReference: spatialreference
    }
    var polyline = new esri.geometry.Polyline(json);
    return polyline;
}
/**
 * wkt转化成arcgis的Polygon对象
 * @param wkt
 * @returns {Polygon}
 * @constructor
 */
export function WktToPolygon(wkt, spatialreference){
	var wktUtil = new WKTUtil();
	var points = wktUtil.read(wkt);
	var json = {
			rings: points,
			spatialReference: spatialreference
    }
	var polygon = new esri.geometry.Polygon(json);
    return polygon;
}
/**
 * @param geometry
 */
export function PointToWKT(geometry){
    console.log(geometry);
    return "POINT ("+geometry.x+" "+geometry.y+")";
}
/**
 * @param geometry
*/
export function PolygonToWKT(geometry){
	var wkt = [];
	var rings = geometry.rings;
	for(var i of rings){
		for(var j of i){
			wkt.push(j.join(" "));
		}
	}	
	return "POLYGON (("+wkt.join(",")+"))";
}
 
/** 
 * @param geometry
*/
export function LineToWKT(geometry){
	var wkt = [];
	var paths = geometry.paths;
	for(var i of paths){
	//	var path = paths[i];
		for(var p of i){
			//var p = path[j];
			wkt.push(p.join(" "));
		}
	}	
	return "LINESTRING ("+wkt.join(",")+")";
}

/**
 * 矩形范围转wkt
 */
export function ExtentToWKT(geometry){
	var xmax = geometry.xmax
	var xmin = geometry.xmin
	var ymax = geometry.ymax
	var ymin = geometry.ymin
	return "POLYGON (("+xmin+" "+ ymin+","+xmax+" "+ ymin+","+xmax+" "+ ymax+","+xmin+" "+ ymax+","+xmin+" "+ ymin+"))";
}

