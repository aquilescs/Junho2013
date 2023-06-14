var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Pasescomatosemapoio_1 = new ol.format.GeoJSON();
var features_Pasescomatosemapoio_1 = format_Pasescomatosemapoio_1.readFeatures(json_Pasescomatosemapoio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pasescomatosemapoio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pasescomatosemapoio_1.addFeatures(features_Pasescomatosemapoio_1);
var lyr_Pasescomatosemapoio_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pasescomatosemapoio_1, 
                style: style_Pasescomatosemapoio_1,
                interactive: true,
                title: '<img src="styles/legend/Pasescomatosemapoio_1.png" /> Países com atos em apoio'
            });
var format_MunicipioscomAto_2 = new ol.format.GeoJSON();
var features_MunicipioscomAto_2 = format_MunicipioscomAto_2.readFeatures(json_MunicipioscomAto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipioscomAto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipioscomAto_2.addFeatures(features_MunicipioscomAto_2);
var lyr_MunicipioscomAto_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipioscomAto_2, 
                style: style_MunicipioscomAto_2,
                interactive: true,
                title: '<img src="styles/legend/MunicipioscomAto_2.png" /> Municipios com Ato'
            });
var format_Municipioscomreduodetarifa_3 = new ol.format.GeoJSON();
var features_Municipioscomreduodetarifa_3 = format_Municipioscomreduodetarifa_3.readFeatures(json_Municipioscomreduodetarifa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipioscomreduodetarifa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipioscomreduodetarifa_3.addFeatures(features_Municipioscomreduodetarifa_3);
var lyr_Municipioscomreduodetarifa_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipioscomreduodetarifa_3, 
                style: style_Municipioscomreduodetarifa_3,
                interactive: true,
                title: '<img src="styles/legend/Municipioscomreduodetarifa_3.png" /> Municipios com redução de tarifa'
            });
var format_AtosdeJunhoMapadeCalor_4 = new ol.format.GeoJSON();
var features_AtosdeJunhoMapadeCalor_4 = format_AtosdeJunhoMapadeCalor_4.readFeatures(json_AtosdeJunhoMapadeCalor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AtosdeJunhoMapadeCalor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtosdeJunhoMapadeCalor_4.addFeatures(features_AtosdeJunhoMapadeCalor_4);
var lyr_AtosdeJunhoMapadeCalor_4 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_AtosdeJunhoMapadeCalor_4, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Atos de Junho - Mapa de Calor'
            });
var format_AtosdeJunho_5 = new ol.format.GeoJSON();
var features_AtosdeJunho_5 = format_AtosdeJunho_5.readFeatures(json_AtosdeJunho_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AtosdeJunho_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtosdeJunho_5.addFeatures(features_AtosdeJunho_5);
var lyr_AtosdeJunho_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AtosdeJunho_5, 
                style: style_AtosdeJunho_5,
                interactive: true,
                title: '<img src="styles/legend/AtosdeJunho_5.png" /> Atos de Junho'
            });

var titulo = new ol.layer.Vector({
                title: 'Clique sobre as cidades/atos para mais informações'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_Pasescomatosemapoio_1.setVisible(true);lyr_MunicipioscomAto_2.setVisible(true);lyr_Municipioscomreduodetarifa_3.setVisible(true);lyr_AtosdeJunhoMapadeCalor_4.setVisible(false);lyr_AtosdeJunho_5.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_Pasescomatosemapoio_1,lyr_MunicipioscomAto_2,lyr_Municipioscomreduodetarifa_3,lyr_AtosdeJunhoMapadeCalor_4,lyr_AtosdeJunho_5,titulo];
lyr_Pasescomatosemapoio_1.set('fieldAliases', {'FID': 'FID', 'COUNTRY': 'País', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Fonte': 'Fonte', 'EnderecoGe': 'EnderecoGe', });
lyr_MunicipioscomAto_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'Cidade', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'Ato_link': 'Ato_link', 'Ato_Data.M': 'Ato_Data.M', 'Ato_Título': 'Ato_Título', 'Ato_Quanti': 'Ato_Quanti', 'Ato_Endere': 'Ato_Endere', 'Reduc.Muni': 'Reduc.Muni', 'Reduc.Font': 'Reduc.Font', 'AtoCidade': 'AtoCidade', 'AtoEstado': 'AtoEstado', 'AtoFonte': 'Fonte', 'AtoEnderec': 'AtoEnderec', 'Número de': 'Número de atos*', });
lyr_Municipioscomreduodetarifa_3.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'UF', 'AREA_KM2': 'AREA_KM2', 'Ato_link': 'Ato_link', 'Ato_Data.M': 'Ato_Data.M', 'Ato_Título': 'Ato_Título', 'Ato_Quanti': 'Ato_Quanti', 'Ato_Endere': 'Ato_Endere', 'Reduc.Muni': 'Município', 'Reduc.Font': 'Fonte', });
lyr_AtosdeJunho_5.set('fieldAliases', {'data': 'data', 'Texto': 'Texto', 'link.2.': 'link.2.', 'Fonte': 'Fonte', 'Data.Manifestacao': 'Data do ato', 'Título': ' Título', 'Endereco': 'Endereco', 'Cidade': 'Cidade', 'Estado': 'Estado', 'Quantidade.de.pessoas': 'Estimativa de manifestantes', 'Obs': 'Obs', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGerado': 'Ponto', 'Latitude_2': 'Latitude_2', 'Longitude_2': 'Longitude_2', });
lyr_Pasescomatosemapoio_1.set('fieldImages', {'FID': 'Hidden', 'COUNTRY': 'TextEdit', 'ISO': 'Hidden', 'COUNTRYAFF': 'Hidden', 'AFF_ISO': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'Fonte': 'TextEdit', 'EnderecoGe': 'Hidden', });
lyr_MunicipioscomAto_2.set('fieldImages', {'CD_MUN': 'Hidden', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'Hidden', 'AREA_KM2': 'Hidden', 'Ato_link': 'Hidden', 'Ato_Data.M': 'Hidden', 'Ato_Título': 'Hidden', 'Ato_Quanti': 'Hidden', 'Ato_Endere': 'Hidden', 'Reduc.Muni': 'Hidden', 'Reduc.Font': 'Hidden', 'AtoCidade': 'Hidden', 'AtoEstado': 'Hidden', 'AtoFonte': 'TextEdit', 'AtoEnderec': 'Hidden', 'Número de': 'TextEdit', });
lyr_Municipioscomreduodetarifa_3.set('fieldImages', {'CD_MUN': 'Hidden', 'NM_MUN': 'Hidden', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'Hidden', 'Ato_link': 'Hidden', 'Ato_Data.M': 'Hidden', 'Ato_Título': 'Hidden', 'Ato_Quanti': 'Hidden', 'Ato_Endere': 'Hidden', 'Reduc.Muni': 'TextEdit', 'Reduc.Font': 'TextEdit', });
lyr_AtosdeJunho_5.set('fieldImages', {'data': 'Hidden', 'Texto': 'Hidden', 'link.2.': 'Hidden', 'Fonte': 'TextEdit', 'Data.Manifestacao': 'DateTime', 'Título': 'TextEdit', 'Endereco': 'Hidden', 'Cidade': 'Hidden', 'Estado': 'Hidden', 'Quantidade.de.pessoas': 'TextEdit', 'Obs': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGerado': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_2': 'Hidden', });
lyr_Pasescomatosemapoio_1.set('fieldLabels', {'COUNTRY': 'inline label', 'Fonte': 'inline label', });
lyr_MunicipioscomAto_2.set('fieldLabels', {'NM_MUN': 'inline label', 'AtoFonte': 'inline label', 'Número de': 'inline label', });
lyr_Municipioscomreduodetarifa_3.set('fieldLabels', {'SIGLA_UF': 'inline label', 'Reduc.Muni': 'header label', 'Reduc.Font': 'inline label', });
lyr_AtosdeJunho_5.set('fieldLabels', {'Fonte': 'inline label', 'Data.Manifestacao': 'inline label', 'Título': 'inline label', 'Quantidade.de.pessoas': 'inline label', 'EnderecoGerado': 'inline label', });
lyr_AtosdeJunho_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});