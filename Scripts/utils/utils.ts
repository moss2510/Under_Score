module utils {

    // Dictionary From https://stackoverflow.com/questions/15877362/declare-and-initialize-a-dictionary-in-typescript with a few modification.
    export class Dictionary<K, V> implements IDictionary<K, V>{

        private _keys: K[] = [];
        private _values: V[] = [];

        Add(key: any, value: V): void {
            this[key] = value; // Create a varaible in this class?
            this._keys.push(key);
            this._values.push(value);
        }

        Remove(key: any): void {
            let index = this._keys.indexOf(key, 0);
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            delete this[key];
        }

        Set(key: any, value: V){
            this.Remove(key);
            this.Add(key, value);
        }

        ContainsKey(key: any): boolean {
            if (typeof this[key] === "undefined") {
                return false;
            }
            return true;
        }

        Keys(): K[] {
            return this._keys;
        }

        Values(): V[] {
            return this._values;
        }
    }

    interface IDictionary<K, V> {
        Add(key: K, value: V): void;
        Remove(key: K): void;
        ContainsKey(key: K): boolean;
        Keys(): K[];
        Values(): V[];
    }
}