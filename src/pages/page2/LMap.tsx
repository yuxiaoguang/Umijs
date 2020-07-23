import React from 'react'
import './lbmap.less'
import L from './leaflet-map'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
const { tileLayer: { chinaProvider, }, layerGroup, }: any = L

class LMap extends React.Component {
  public componentDidMount () {
    this.initMap([ 31.222957, 121.538062, ], 15)
  }
  public layerGroupCluster (type: string, options?: any) {
    return layerGroup([ chinaProvider(type, { ...options, maxZoom: 18, minZoom: 5, attribution: '@xxxx Google', }), ])
  }
  public initMap (latlng: [number, number], zoom = 15) {
    const [ lat, lng, ]: [number, number] = latlng
    const overlayLayers: any = {}
    const { layerGroupCluster, } = this
    const center: [number, number] = [ lat, lng, ]

    // Gaode Map
    const gaodeNormal = layerGroupCluster('GaoDe.Normal.Map')
    const gaodeSatellite = layerGroupCluster('GaoDe.Satellite.Map')
    const gaodeAnnotion = layerGroupCluster('GaoDe.Satellite.Annotion')
    const gaodeImages = layerGroup([ gaodeSatellite, gaodeAnnotion, ])

    // Google Map
    const googleNormal = layerGroupCluster('Google.Normal.Map')
    const googleSatellite = layerGroupCluster('Google.Satellite.Map')
    const googleAnnotion = layerGroupCluster('Google.Satellite.Annotion')

    const baseLayers: any = {
      '谷歌地图': googleNormal,
      '谷歌卫星': googleSatellite,
      '谷歌影像': googleAnnotion,
      '高德地图': gaodeNormal,
      '高德影像': gaodeImages,
    }

    const defaultLayers = [ baseLayers['谷歌地图'], ]

    const mapOptions: object = {
      center,
      zoom,
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
