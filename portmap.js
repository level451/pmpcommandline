/**
 * Created by todd on 12/6/2016.
 */
var pmp = require('pmp'); // version from npm

var port = process.argv[2]
mapport(port)
function mapport (port){

    pmp.findGateway("",function(err,gateway) {
        if (err) {
            console.log('Gateway not found', err);
        }
        else {
            console.log('gateway found: '+ gateway.ip + ", External IP: "+ gateway.externalIP);
// updated 0 to 999999 7/8/2016
            // map the websever

                console.log('Trying to map port port:'+port)

            //gateway, local port, remote port, time to keep open in minutes ,label(used by some routers),function()
            pmp.portMap(gateway,port,port,1,'pmpcommandline',function(err,rslt){

                if (err) {
                    console.log('error opening port '+settings.options.webserver.listenport, err);
                }
                else {

                    console.log('Success!');



                }
            });
        }
    });



};