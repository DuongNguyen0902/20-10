import React, { createElement, useMemo } from 'react';

/**
 * A fidelity-first bridge: parses trusted local HTML designed in V6 into
 * actual React elements (including complex SVG garden drawings).
 * We keep the original IDs/classes so the interaction engine can be ported
 * incrementally without losing animations or spacing.
 * Never pass user-submitted HTML to this component.
 */
const htmlAttributeAliases: Record<string,string> = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex',
  readonly: 'readOnly', novalidate: 'noValidate', maxlength: 'maxLength', autocomplete: 'autoComplete', fetchpriority: 'fetchPriority',
  autocapitalize: 'autoCapitalize', srcset: 'srcSet', crossorigin: 'crossOrigin',
  'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin', 'fill-rule': 'fillRule',
  'clip-rule': 'clipRule', 'stop-color': 'stopColor', 'stop-opacity': 'stopOpacity',
  'stroke-opacity': 'strokeOpacity', 'fill-opacity': 'fillOpacity',
  'stroke-dasharray': 'strokeDasharray', 'stroke-dashoffset': 'strokeDashoffset'
};
const booleanAttributes = new Set(['hidden','disabled','required','readOnly','multiple','checked','autoFocus']);

function convertNode(node: ChildNode, key: string): React.ReactNode {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent;
  if (node.nodeType !== Node.ELEMENT_NODE) return null;
  const element = node as HTMLElement;
  const props: Record<string,unknown> = {key};
  for (const attr of Array.from(element.attributes)) {
    const name=htmlAttributeAliases[attr.name] ?? attr.name;
    if (attr.name === 'style') {
      const style: Record<string,string>={};
      const declarations=(element as HTMLElement).style;
      for(let i=0;i<declarations.length;i++) {
        const cssName=declarations.item(i);
        if(!cssName)continue;
        const jsxName=cssName.startsWith('--') ? cssName : cssName.replace(/-([a-z])/g,(_match,letter:string)=>letter.toUpperCase());
        style[jsxName]=declarations.getPropertyValue(cssName).trim();
      }
      props.style=style;
    } else if (booleanAttributes.has(name)) {
      props[name]=true;
    } else if (name === 'tabIndex' || name === 'maxLength') {
      props[name]=Number(attr.value);
    } else {
      props[name]=attr.value;
    }
  }
  const tag=element.localName;
  const children=Array.from(element.childNodes).map((child,index)=>convertNode(child,`${key}-${index}`));
  return createElement(tag,props,...children);
}

export default function Markup({html}: {html:string}) {
  const elements=useMemo(()=>{
    const template=document.createElement('template');
    template.innerHTML=html.trim();
    return Array.from(template.content.childNodes).map((node,index)=>convertNode(node,`html-${index}`));
  },[html]);
  return <>{elements}</>;
}
