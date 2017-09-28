// 根据经纬度坐标点返回两点间的距离 （单位：公里）
export function getDistance (point1, point2) {
  return Math.acos(Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) * Math.cos(point1.lng * Math.PI / 180 - point2.lng * Math.PI / 180) + Math.sin(point1.lat * Math.PI / 180) * Math.sin(point2.lat * Math.PI / 180)) * 6370996.81 / 1000
}
