import React, { useState } from 'react';
import {TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function Datetime() {
    
    const date = new Date();
    var dayOfWeek = [ "日", "月", "火", "水", "木", "金", "土" ] ;
    const [year, setFullYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth()+1);
    const [day, setDate] = useState(date.getDate());
    const [youbi, setDay] = useState(date.getDay());


    var startDate = new Date(year, month-1, 1) // 月の最初の日を取得
    var startDayCount = startDate.getDate() // 月の末日
    var endDate = new Date(year, month, 0) // 月の最後の日を取得
    var endDayCount = endDate.getDate() // 月の末日
   
    function onpress(month,number,youbi,flag){
        //　翌日のボタンを押した時
        if (flag == 1) {
            if (number != null) {
                //末日の場合は翌月の1日に設定する
                if (number > endDayCount) {
                number = 1;
                month = month + 1;
                }
            setDate(number);
            setMonth(month);
            //土曜日の場合は日曜日に設定
                if (youbi >= 7) {
                    youbi = 0;
                }
            setDay(youbi);
           }
        //　前日のボタンを押した時
        } else {
            if (number != null) {
                // 前の月の場合は前月の末尾を取得する
                if (number < 1) {
                endDate = new Date(year, month-1, 0) // 前月の最後の日を取得
                endDayCount = endDate.getDate() // 前月の末日
                number = endDayCount;
                month = month - 1;
                }
            setDate(number);
            setMonth(month);
                //日曜日の場合は土曜日に戻る
                if (youbi <= -1) {
                    youbi = 6;
                }
            setDay(youbi);
           }

        }
    }
    return (
        <View style={styles.date}>
             <TouchableOpacity onPress={() => onpress(month,day - 1,youbi-1,0)} style={styles.dateText}>
             <Text>
             ◀︎
             </Text>    
            </TouchableOpacity>
            <Text style={styles.dateText}>
                {year}年{month}月{day}日({dayOfWeek[youbi]})
            </Text>
            <TouchableOpacity onPress={() => onpress(month, day + 1,youbi+1,1)} style={styles.dateText}>
            <Text>    
            ▶︎
            </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    date: {
        flexDirection: 'row',
        height: 70,
        alignItems:'center',
        justifyContent: 'center',
    },
    dateText: {
        fontSize: 20,
        paddingHorizontal: 10,
    },
});