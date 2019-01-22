module utils {

    // Dictionary From https://stackoverflow.com/questions/15877362/declare-and-initialize-a-dictionary-in-typescript with a few modification.
    export class Dictionary<TKey, TValue> implements IDictionary<string, TValue>{

        private _keys: string[] = [];
        private _values: TValue[] = [];

        Add(key: string, value: TValue): void {
            this[key] = value; // Create a varaible in this class?
            this._keys.push(key);
            this._values.push(value);
        }

        Remove(key: string): void {
            let index = this._keys.indexOf(key, 0);
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            delete this[typeof (key)];
        }

        Set(key: string, value: TValue) {
            if (this.ContainsKey(key)) {
                let index = this._keys.indexOf(key, 0);
                this._values[index] = value;
            }
        }

        ContainsKey(key: string): boolean {
            if (typeof this[key] === "undefined") {
                return false;
            }
            return true;
        }

        GetValue(key: string): TValue {
            if (this.ContainsKey(key)) {
                let index = this._keys.indexOf(key, 0);
                return this._values[index];
            }
            return null;
        }

        Keys(): string[] {
            return this._keys;
        }

        Values(): TValue[] {
            return this._values;
        }
    }

    interface IDictionary<TKey, TValue> {
        Add(key: TKey, value: TValue): void;
        Remove(key: TKey): void;
        ContainsKey(key: TKey): boolean;
        Keys(): TKey[];
        Values(): TValue[];
    }

    export class Util {
        public static NotNullOrUndefined(object: any): boolean {
            return object != null || object != undefined;
        }
    }
}