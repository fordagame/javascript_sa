namespace ERP
{
    export class ResourceLoader implements ILanguageResourceLoader  {
        basePath: string;
        constructor(basePath: string) {
            this.basePath = basePath;
        }
        loadLanguageResource(resourceName: string, language: string, success: (resourceName: string, result: Array<string>) => void) {
            app.ajax(this.basePath + "/" + resourceName + "." + language + ".js?ver=" + version, {
                method: "Get",
                success: function (result: string) {
                    eval(result);
                    success(resourceName, ERP.Resources[resourceName]);
                }
            })
        }
    }
}