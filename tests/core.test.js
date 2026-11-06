import {test} from 'node:test';import assert from 'node:assert/strict';import * as c from '../dist/core.js';
test('power-hours-count arithmetic and boundaries',()=>{const r=c.energy([{name:'lamp',watts:100,hours:10,count:2}],.2,30);assert.equal(r.kwh,60);assert.equal(r.cost,12);assert.throws(()=>c.energy([{name:'bad',watts:10,hours:25,count:1}],.2));assert.throws(()=>c.parse('incomplete'))});
