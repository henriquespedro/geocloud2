/*
 * File: app/view/MyWindow.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyWindow', {
    extend: 'Ext.window.Window',

    height: 281,
    itemId: 'window',
    width: 600,
    title: 'My Window',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    itemId: 'form',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    bodyPadding: 10,
                    manageHeight: false,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            flex: 1,
                            width: 400,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            hideEmptyLabel: false,
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    html: 'Min'
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    html: 'Hour'
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    html: 'Day of month'
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    html: 'Month'
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    html: 'Day of week'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            flex: 1,
                            width: 400,
                            defaults: {
                                flex: 1
                            },
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            fieldLabel: 'Cron',
                            items: [
                                {
                                    xtype: 'combobox',
                                    name: 'min',
                                    value: '*',
                                    store: [
                                        '*',
                                        0,
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6,
                                        7,
                                        8,
                                        9,
                                        10,
                                        11,
                                        12,
                                        13,
                                        14,
                                        15,
                                        16,
                                        17,
                                        18,
                                        19,
                                        20,
                                        21,
                                        22,
                                        23,
                                        24,
                                        25,
                                        26,
                                        27,
                                        28,
                                        29,
                                        30,
                                        31,
                                        32,
                                        33,
                                        34,
                                        35,
                                        36,
                                        37,
                                        38,
                                        39,
                                        40,
                                        41,
                                        42,
                                        43,
                                        44,
                                        45,
                                        46,
                                        47,
                                        48,
                                        49,
                                        50,
                                        51,
                                        52,
                                        53,
                                        54,
                                        55,
                                        56,
                                        57,
                                        58,
                                        59
                                    ]
                                },
                                {
                                    xtype: 'combobox',
                                    name: 'hour',
                                    value: '*',
                                    store: [
                                        '*',
                                        0,
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6,
                                        7,
                                        8,
                                        9,
                                        10,
                                        11,
                                        12,
                                        13,
                                        14,
                                        15,
                                        16,
                                        17,
                                        18,
                                        19,
                                        20,
                                        21,
                                        22,
                                        23
                                    ]
                                },
                                {
                                    xtype: 'combobox',
                                    name: 'dayofmonth',
                                    value: '*',
                                    store: [
                                        '*',
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6,
                                        7,
                                        8,
                                        9,
                                        10,
                                        11,
                                        12,
                                        13,
                                        14,
                                        15,
                                        16,
                                        17,
                                        18,
                                        19,
                                        20,
                                        21,
                                        22,
                                        23,
                                        24,
                                        25,
                                        26,
                                        27,
                                        28,
                                        29,
                                        30,
                                        31
                                    ]
                                },
                                {
                                    xtype: 'combobox',
                                    name: 'month',
                                    value: '*',
                                    store: [
                                        '*',
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6,
                                        7,
                                        8,
                                        9,
                                        10,
                                        11,
                                        12
                                    ]
                                },
                                {
                                    xtype: 'combobox',
                                    flex: 1,
                                    name: 'dayofweek',
                                    value: '*',
                                    store: [
                                        '*',
                                        0,
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Name',
                            name: 'name',
                            value: 'hej',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Schema',
                            name: 'schema',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: 'Url',
                            name: 'url',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Epsg',
                            name: 'epsg',
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            fieldLabel: 'Type',
                            name: 'type',
                            allowBlank: false,
                            store: [
                                'POINT',
                                'LINESTRING',
                                'POLYGON',
                                'MULTIPOINT',
                                'MULTILINESTRING',
                                'MULTIPOLYGON'
                            ]
                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            fieldLabel: 'Encoding',
                            name: 'encoding',
                            allowBlank: false,
                            store: [
                                'UTF8',
                                'LATIN1'
                            ]
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            itemId: 'save',
                            text: 'Save'
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            itemId: 'update',
                            text: 'Update'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});