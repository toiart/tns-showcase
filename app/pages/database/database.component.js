"use strict";
var core_1 = require("@angular/core");
var colorModule = require("color");
var platform = require("platform");
//USING PLUGIN: NATIVESCRIPT-SQLITE
var Sqlite = require('nativescript-sqlite');
var DatabasePage = (function () {
    function DatabasePage() {
        this.info = '';
        this.model = { name: '', age: '' };
        this.isAndroid = platform.isAndroid;
        var instance = this;
        //Create the database (DB)
        console.log('creating database...');
        var db_promise = new Sqlite('MyDB', function (err, db) {
            if (err) {
                console.error('We failed to create and open database', err);
                instance.info = 'We failed to create and open database: ' + err;
            }
            else {
                instance.db = db;
                console.log('Database opened and created');
            }
        });
        this.setupDB();
    }
    // Inserts a new row executing SQL
    DatabasePage.prototype.insert = function () {
        var instance = this;
        //CHECK IF ITS OPEN
        if (this.db.isOpen()) {
            /* To execute non-SELECT SQL statements  */
            this.db.execSQL('INSERT INTO tests (name, age) VALUES (?,?)', [this.model.name, this.model.age], function (err, id) {
                console.log('The new record id is:', id);
                instance.info = 'Row added: ' + id;
            });
        }
        else {
            console.log('DB is closed!');
            instance.info = 'DB is closed!';
        }
    };
    //Gets all the rows
    DatabasePage.prototype.getAll = function () {
        var _this = this;
        var instance = this;
        //CHECK IF ITS OPEN
        if (this.db.isOpen()) {
            /* To execute SELECT SQL statements:
                    .get returns the first row as result in the callback
                    .all returns all the rows as result in the callback
                    .each returns each row as result in the callback (which is called as many times as the number of rows) */
            this.db.all('SELECT * FROM tests', function (err, r) {
                console.log('Row of data was: ', JSON.stringify(r));
                instance.info = 'Data received';
                _this.results = r;
            });
        }
        else {
            console.log('DB is closed!');
            instance.info = 'DB is closed!';
        }
    };
    //Deletes tests rows
    DatabasePage.prototype.deleteAll = function () {
        var instance = this;
        //CHECK IF ITS OPEN
        if (this.db.isOpen()) {
            this.db.execSQL('DELETE FROM tests', function (err) {
                if (err) {
                    console.log('There was an error:', err);
                    instance.info = 'There was an error: ' + err;
                }
                else {
                    console.log('Data has been deleted');
                    instance.info = 'Data has been deleted';
                }
            });
        }
        else {
            console.log('DB is closed!');
            instance.info = 'DB is closed!';
        }
    };
    //To close DB
    DatabasePage.prototype.closeDB = function () {
        var instance = this;
        //CHECK IF IT EXISTS AND IF ITS OPEN
        if (this.isAndroid) {
            if (Sqlite.exists('MyDB')) {
                if (this.db.isOpen()) {
                    this.db.close(function (err) {
                        if (err) {
                            console.log('We failed to close database');
                        }
                        else {
                            console.log('DB closed');
                            instance.info = 'DB closed';
                        }
                    });
                }
                else {
                    console.log('DB is already closed!');
                    instance.info = 'DB is already closed!';
                }
            }
            else {
                console.log('DB doesn\'t exist');
                instance.info = 'DB doesn\'t exist';
            }
        }
        else {
            if (this.db.isOpen()) {
                this.db.close(function (err) {
                    if (err) {
                        console.log('We failed to close database');
                    }
                    else {
                        console.log('DB closed');
                        instance.info = 'DB closed';
                    }
                });
            }
            else {
                console.log('DB is already closed!');
                instance.info = 'DB is already closed!';
            }
        }
    };
    //To open DB
    DatabasePage.prototype.openDB = function () {
        var instance = this;
        //CHECK IF IT EXISTS AND IF ITS OPEN
        if (this.isAndroid) {
            if (Sqlite.exists('MyDB')) {
                if (instance.db.isOpen()) {
                    console.log('DB is already open!');
                    instance.info = 'DB is already open!';
                }
                else {
                    var db_promise = new Sqlite('MyDB', false, function (err, db) {
                        if (err) {
                            console.error('We failed to open database', err);
                            instance.info = 'We failed to open database ' + err;
                        }
                        else {
                            console.log('Are we open yet (Inside Callback)? ', db.isOpen() ? 'Yes' : 'No'); // Yes
                            instance.info = 'DB opened';
                            instance.db = db;
                        }
                    });
                }
            }
            else {
                console.log('DB doesn\'t exist');
                instance.info = 'DB doesn\'t exist!';
            }
        }
        else {
            if (instance.db.isOpen()) {
                console.log('DB is already open!');
                instance.info = 'DB is already open!';
            }
            else {
                var db_promise = new Sqlite('MyDB', false, function (err, db) {
                    if (err) {
                        console.error('We failed to open database', err);
                        instance.info = 'We failed to open database ' + err;
                    }
                    else {
                        console.log('Are we open yet (Inside Callback)? ', db.isOpen() ? 'Yes' : 'No'); // Yes
                        instance.info = 'DB opened';
                        instance.db = db;
                    }
                });
            }
        }
    };
    //Initial DB set up
    DatabasePage.prototype.setupDB = function () {
        var _this = this;
        this.db.resultType(Sqlite.RESULTSASOBJECT);
        this.db.execSQL('DROP TABLE IF EXISTS tests;', function (err) {
            if (err) {
                console.log('!---- Drop Err', err);
            }
            _this.db.execSQL('CREATE TABLE tests (`name` TEXT, `age` NUMERIC)', function (err) {
                if (err) {
                    console.log('!---- Create Table err', err);
                    return;
                }
                console.log('TABLE CREATED');
                _this.db.execSQL('INSERT INTO tests (name, age) VALUES ("Nathan Drake",32)', function (err, id) {
                    if (err) {
                        console.log('!---- Insert err', err);
                        return;
                    }
                    console.log('ROW ADDED', id);
                    _this.db.execSQL('INSERT INTO tests (name, age) VALUES ("Elena Fisher",30)', function (err, id) {
                        if (err) {
                            console.log('!---- Insert err', err);
                            return;
                        }
                        console.log('ROW ADDED', id);
                    });
                });
            });
        });
        this.closeDB();
    };
    DatabasePage.prototype.changeCellBackground = function (args) {
        if (!this.isAndroid) {
            var cell = args.ios; //return UITableViewCell
            cell.backgroundColor = new colorModule.Color('0,0,0,0').ios;
        }
    };
    return DatabasePage;
}());
DatabasePage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-database-page',
        templateUrl: 'database.html',
        styleUrls: ['database.css']
    }),
    __metadata("design:paramtypes", [])
], DatabasePage);
exports.DatabasePage = DatabasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFDeEMsbUNBQXNDO0FBQ3RDLG1DQUFzQztBQUV0QyxtQ0FBbUM7QUFDbkMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFRNUMsSUFBYSxZQUFZO0lBUXJCO1FBSlEsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQWdDLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFDekQsY0FBUyxHQUFZLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFHNUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLDBCQUEwQjtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEVBQUU7WUFDeEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM1RCxRQUFRLENBQUMsSUFBSSxHQUFHLHlDQUF5QyxHQUFHLEdBQUcsQ0FBQztZQUNwRSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMvQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGtDQUFrQztJQUMzQiw2QkFBTSxHQUFiO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFB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LEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDckMsTUFBTSxDQUFDO3dCQUNYLENBQUM7d0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2pDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sMkNBQW9CLEdBQTNCLFVBQTRCLElBQUk7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsd0JBQXdCO1lBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNoRSxDQUFDO0lBQ0wsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQXRNRCxJQXNNQztBQXRNWSxZQUFZO0lBTnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsZUFBZTtRQUM1QixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDOUIsQ0FBQzs7R0FDVyxZQUFZLENBc014QjtBQXRNWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBjb2xvck1vZHVsZSA9IHJlcXVpcmUoJ2NvbG9yJyk7XG5pbXBvcnQgcGxhdGZvcm0gPSByZXF1aXJlKCdwbGF0Zm9ybScpO1xuXG4vL1VTSU5HIFBMVUdJTjogTkFUSVZFU0NSSVBULVNRTElURVxudmFyIFNxbGl0ZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1zcWxpdGUnKTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NjLWRhdGFiYXNlLXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGF0YWJhc2UuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2RhdGFiYXNlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFiYXNlUGFnZSB7XG5cbiAgICBwcml2YXRlIGRiO1xuICAgIHByaXZhdGUgcmVzdWx0cztcbiAgICBwcml2YXRlIGluZm86IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgbW9kZWw6IHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfSA9IHtuYW1lOiAnJywgYWdlOiAnJ307XG4gICAgcHJpdmF0ZSBpc0FuZHJvaWQ6IGJvb2xlYW4gPSBwbGF0Zm9ybS5pc0FuZHJvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdGhpcztcbiAgICAgICAgLy9DcmVhdGUgdGhlIGRhdGFiYXNlIChEQilcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGRhdGFiYXNlLi4uJyk7XG4gICAgICAgIGxldCBkYl9wcm9taXNlID0gbmV3IFNxbGl0ZSgnTXlEQicsIChlcnIsIGRiKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignV2UgZmFpbGVkIHRvIGNyZWF0ZSBhbmQgb3BlbiBkYXRhYmFzZScsIGVycik7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5mbyA9ICdXZSBmYWlsZWQgdG8gY3JlYXRlIGFuZCBvcGVuIGRhdGFiYXNlOiAnICsgZXJyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5kYiA9IGRiO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBvcGVuZWQgYW5kIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0dXBEQigpO1xuICAgIH1cblxuICAgIC8vIEluc2VydHMgYSBuZXcgcm93IGV4ZWN1dGluZyBTUUxcbiAgICBwdWJsaWMgaW5zZXJ0KCkge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICAvL0NIRUNLIElGIElUUyBPUEVOXG4gICAgICAgIGlmICh0aGlzLmRiLmlzT3BlbigpKSB7XG4gICAgICAgICAgICAvKiBUbyBleGVjdXRlIG5vbi1TRUxFQ1QgU1FMIHN0YXRlbWVudHMgICovXG4gICAgICAgICAgICB0aGlzLmRiLmV4ZWNTUUwoJ0lOU0VSVCBJTlRPIHRlc3RzIChuYW1lLCBhZ2UpIFZBTFVFUyAoPyw/KScsIFt0aGlzLm1vZGVsLm5hbWUsIHRoaXMubW9kZWwuYWdlXSwgKGVyciwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlIG5ldyByZWNvcmQgaWQgaXM6JywgaWQpO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLmluZm8gPSAnUm93IGFkZGVkOiAnICsgaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEQiBpcyBjbG9zZWQhJyk7XG4gICAgICAgICAgICBpbnN0YW5jZS5pbmZvID0gJ0RCIGlzIGNsb3NlZCEnO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vR2V0cyBhbGwgdGhlIHJvd3NcbiAgICBwdWJsaWMgZ2V0QWxsKCkge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICAvL0NIRUNLIElGIElUUyBPUEVOXG4gICAgICAgIGlmICh0aGlzLmRiLmlzT3BlbigpKSB7XG4gICAgICAgICAgICAvKiBUbyBleGVjdXRlIFNFTEVDVCBTUUwgc3RhdGVtZW50czpcbiAgICAgICAgICAgICAgICAgICAgLmdldCByZXR1cm5zIHRoZSBmaXJzdCByb3cgYXMgcmVzdWx0IGluIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAuYWxsIHJldHVybnMgYWxsIHRoZSByb3dzIGFzIHJlc3VsdCBpbiB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgLmVhY2ggcmV0dXJucyBlYWNoIHJvdyBhcyByZXN1bHQgaW4gdGhlIGNhbGxiYWNrICh3aGljaCBpcyBjYWxsZWQgYXMgbWFueSB0aW1lcyBhcyB0aGUgbnVtYmVyIG9mIHJvd3MpICovXG4gICAgICAgICAgICB0aGlzLmRiLmFsbCgnU0VMRUNUICogRlJPTSB0ZXN0cycsIChlcnIsIHIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUm93IG9mIGRhdGEgd2FzOiAnLCBKU09OLnN0cmluZ2lmeShyKSk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5mbyA9ICdEYXRhIHJlY2VpdmVkJztcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHMgPSByO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnREIgaXMgY2xvc2VkIScpO1xuICAgICAgICAgICAgaW5zdGFuY2UuaW5mbyA9ICdEQiBpcyBjbG9zZWQhJztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL0RlbGV0ZXMgdGVzdHMgcm93c1xuICAgIHB1YmxpYyBkZWxldGVBbGwoKSB7XG4gICAgICAgIGxldCBpbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIC8vQ0hFQ0sgSUYgSVRTIE9QRU5cbiAgICAgICAgaWYgKHRoaXMuZGIuaXNPcGVuKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGIuZXhlY1NRTCgnREVMRVRFIEZST00gdGVzdHMnLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yOicsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmluZm8gPSAnVGhlcmUgd2FzIGFuIGVycm9yOiAnICsgZXJyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhIGhhcyBiZWVuIGRlbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5mbyA9ICdEYXRhIGhhcyBiZWVuIGRlbGV0ZWQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RCIGlzIGNsb3NlZCEnKTtcbiAgICAgICAgICAgIGluc3RhbmNlLmluZm8gPSAnREIgaXMgY2xvc2VkISc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9UbyBjbG9zZSBEQlxuICAgIHB1YmxpYyBjbG9zZURCKCkge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICAvL0NIRUNLIElGIElUIEVYSVNUUyBBTkQgSUYgSVRTIE9QRU5cbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICBpZiAoU3FsaXRlLmV4aXN0cygnTXlEQicpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGIuaXNPcGVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYi5jbG9zZSgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dlIGZhaWxlZCB0byBjbG9zZSBkYXRhYmFzZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREIgY2xvc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5mbyA9ICdEQiBjbG9zZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREIgaXMgYWxyZWFkeSBjbG9zZWQhJyk7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmluZm8gPSAnREIgaXMgYWxyZWFkeSBjbG9zZWQhJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RCIGRvZXNuXFwndCBleGlzdCcpO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLmluZm8gPSAnREIgZG9lc25cXCd0IGV4aXN0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRiLmlzT3BlbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYi5jbG9zZSgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXZSBmYWlsZWQgdG8gY2xvc2UgZGF0YWJhc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEQiBjbG9zZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmluZm8gPSAnREIgY2xvc2VkJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREIgaXMgYWxyZWFkeSBjbG9zZWQhJyk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5mbyA9ICdEQiBpcyBhbHJlYWR5IGNsb3NlZCEnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vVG8gb3BlbiBEQlxuICAgIHB1YmxpYyBvcGVuREIoKSB7XG4gICAgICAgIGxldCBpbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIC8vQ0hFQ0sgSUYgSVQgRVhJU1RTIEFORCBJRiBJVFMgT1BFTlxuICAgICAgICBpZiAodGhpcy5pc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIGlmIChTcWxpdGUuZXhpc3RzKCdNeURCJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuZGIuaXNPcGVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RCIGlzIGFscmVhZHkgb3BlbiEnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5mbyA9ICdEQiBpcyBhbHJlYWR5IG9wZW4hJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGJfcHJvbWlzZSA9IG5ldyBTcWxpdGUoJ015REInLCBmYWxzZSwgKGVyciwgZGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdXZSBmYWlsZWQgdG8gb3BlbiBkYXRhYmFzZScsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5mbyA9ICdXZSBmYWlsZWQgdG8gb3BlbiBkYXRhYmFzZSAnICsgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXJlIHdlIG9wZW4geWV0IChJbnNpZGUgQ2FsbGJhY2spPyAnLCBkYi5pc09wZW4oKSA/ICdZZXMnIDogJ05vJyk7IC8vIFllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmluZm8gPSAnREIgb3BlbmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5kYiA9IGRiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEQiBkb2VzblxcJ3QgZXhpc3QnKTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5pbmZvID0gJ0RCIGRvZXNuXFwndCBleGlzdCEnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmRiLmlzT3BlbigpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RCIGlzIGFscmVhZHkgb3BlbiEnKTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5pbmZvID0gJ0RCIGlzIGFscmVhZHkgb3BlbiEnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZGJfcHJvbWlzZSA9IG5ldyBTcWxpdGUoJ015REInLCBmYWxzZSwgKGVyciwgZGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignV2UgZmFpbGVkIHRvIG9wZW4gZGF0YWJhc2UnLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5mbyA9ICdXZSBmYWlsZWQgdG8gb3BlbiBkYXRhYmFzZSAnICsgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FyZSB3ZSBvcGVuIHlldCAoSW5zaWRlIENhbGxiYWNrKT8gJywgZGIuaXNPcGVuKCkgPyAnWWVzJyA6ICdObycpOyAvLyBZZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmluZm8gPSAnREIgb3BlbmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmRiID0gZGI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL0luaXRpYWwgREIgc2V0IHVwXG4gICAgcHVibGljIHNldHVwREIoKSB7XG4gICAgICAgIHRoaXMuZGIucmVzdWx0VHlwZShTcWxpdGUuUkVTVUxUU0FTT0JKRUNUKTtcbiAgICAgICAgdGhpcy5kYi5leGVjU1FMKCdEUk9QIFRBQkxFIElGIEVYSVNUUyB0ZXN0czsnLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyEtLS0tIERyb3AgRXJyJywgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGIuZXhlY1NRTCgnQ1JFQVRFIFRBQkxFIHRlc3RzIChgbmFtZWAgVEVYVCwgYGFnZWAgTlVNRVJJQyknLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIS0tLS0gQ3JlYXRlIFRhYmxlIGVycicsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RBQkxFIENSRUFURUQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRiLmV4ZWNTUUwoJ0lOU0VSVCBJTlRPIHRlc3RzIChuYW1lLCBhZ2UpIFZBTFVFUyAoXCJOYXRoYW4gRHJha2VcIiwzMiknLCAoZXJyLCBpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIS0tLS0gSW5zZXJ0IGVycicsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JPVyBBRERFRCcsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYi5leGVjU1FMKCdJTlNFUlQgSU5UTyB0ZXN0cyAobmFtZSwgYWdlKSBWQUxVRVMgKFwiRWxlbmEgRmlzaGVyXCIsMzApJywgKGVyciwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIS0tLS0gSW5zZXJ0IGVycicsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JPVyBBRERFRCcsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xvc2VEQigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VDZWxsQmFja2dyb3VuZChhcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIHZhciBjZWxsID0gYXJncy5pb3M7IC8vcmV0dXJuIFVJVGFibGVWaWV3Q2VsbFxuICAgICAgICAgICAgY2VsbC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY29sb3JNb2R1bGUuQ29sb3IoJzAsMCwwLDAnKS5pb3M7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=