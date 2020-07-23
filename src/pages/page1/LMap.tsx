import React from 'react'
import './lmap.less'
import L from './leaflet-map'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
const { tileLayer: { chinaProvider, }, CRS: { Baidu: crs, }, layerGroup, }: any = L

class LMap extends React.Component {
  public componentDidMount () {
    this.initMap([ 31.222957, 121.538062, ], 15)
  }
  public layerGroupCluster (type: string, options?: any) {
    return layerGroup([ chinaProvider(type, { ...options, maxZoom: 18, minZoom: 5, attribution: '@xxxx Baidu', }), ])
  }
  public initMap (latlng: [number, number], zoom = 15) {
    const [ lat, lng, ]: [number, number] = latlng
    const overlayLayers: any = {}
    const { layerGroupCluster, } = this
    const center: [number, number] = [ lat, lng, ]

    // Baidu Map
    const baiduNormal = layerGroupCluster('Baidu.Normal.Map')
    const baiduSatellite = layerGroupCluster('Baidu.Satellite.Map')
    const baiduAnnotion = layerGroupCluster('Baidu.Satellite.Annotion')

    const baseLayers: any = {
      '百度地图': baiduNormal,
      '百度卫星图': baiduSatellite,
      '百度街景图': baiduAnnotion,
    }

    const defaultLayers = [ baseLayers['百度地图'], ]

    const mapOptions: object = {
      center,
      zoom,
      crs,
      attributionControl: true,
      layers: defaultLayers,
      zoomControl: false,
    }

    const mapInstance = L.map('map', mapOptions)

    L.control.layers(baseLayers, overlayLayers).addTo(mapInstance)
    const icon = L.icon({ iconUrl: markerIcon, shadowUrl: markerShadow, })
    L.marker(center, { icon, }).addTo(mapInstance).openTooltip()
  }
  public render () {
    return (
      <div id='map' />
    )
  }
}

export default LMap
