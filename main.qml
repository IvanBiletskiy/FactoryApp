import QtQuick 2.4
import QtQuick.Controls 1.4
import "main.js" as JS

ApplicationWindow  {
    id: mainwindow
    width: 400
    height: 600
    visible: true
    Item{
        id: page

        anchors.fill: parent
        Text{
            id: myText
            objectName: "myText"
        }
    }

    Component.onCompleted: {
        JS.createButtons();
//        JS.changeButtons();
    }
}
