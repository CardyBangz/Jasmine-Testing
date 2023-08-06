describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      serverNameInput.value = 'Alice';
    });
  
    it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();
  
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    it('should not add a new server to allServers on submitServerInfo() if the string input is empty', function(){
        submitServerInfo();
        
        exoect(Object.keys(allServers).length).toEqual(0);
        
    });

    it('should create table row element and pass to appendTd function with input value', function(){
submitServerInfo();
updateServerTable();
    });
  
    afterEach(function() {
      // teardown logic
      serverNameInput.value=''
      allServers={}

    });
  });