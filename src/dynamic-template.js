export const dynamicTemplate = `<span binding="russian"></span>
    <div binding="main"></div>
    <div class="flex flex-column">
        <div class="flex flex-row">
            <span>Слово: </span>
            <span binding="current"></span>/<span binding="total"></span>
        </div>
        <div class="flex flex-row">
            <span>Ошибок: </span>
            <span binding="error"></span>
        </div>
    </div>`;

export const dynamicReverseTemplate = `<span binding="german"></span>
    <div class="flex flex-row flex-wrap">
        <div class="flex flex-column" style="margin-top: 20px">
            <div>
                <input type="radio" value="" id="value1" name="german" binding="value1">
                <label for="value1" binding="label1"></label>
            </div>
            <div>
                <input type="radio" value="" id="value2" name="german" binding="value2">
                <label for="value2" binding="label2"></label>
            </div>
            <div>
                <input type="radio" value="" id="value3" name="german" binding="value3">
                <label for="value3" binding="label3"></label>
            </div>
            <div>
                <input type="radio" value="" id="value4" name="german" binding="value4">
                <label for="value4" binding="label4"></label>
            </div>
            
        </div>    
    </div>
    <div class="flex flex-column">
        <div class="flex flex-row">
            <span>Слово: </span>
            <span binding="current"></span>/<span binding="total"></span>
        </div>
        <div class="flex flex-row">
            <span>Ошибок: </span>
            <span binding="error"></span>
        </div>
    </div>`;
