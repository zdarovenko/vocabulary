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
