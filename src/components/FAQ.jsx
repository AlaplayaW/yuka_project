import React, { Component } from 'react';
import CollapseFaq from './Collapse';

export default function Faq() {
  return(
    <div>
      <CollapseFaq 
      title = "Comment scanner ?" 
      description = "Demande à Google"
      />     
      <CollapseFaq 
      title = "Comment a été constituée la base de données?" 
      description = "Yukids s’est appuyé sur Open Food Facts, une base de données ouverte et collaborative qui fonctionne sur le même modèle que Wikipedia."
      />   
      <CollapseFaq 
      title = "Comment est financée l’application ?" 
      description = "Par vos impots"
      /> 
      <CollapseFaq 
      title = "Yukids est-elle une application indépendante ?" 
      description = "Oui, Yukids est une application 100% indépendante. Aucune marque ni aucun fabricant ne peut nous influencer"
      /> 
      <CollapseFaq 
      title = "Comment sont notés les produits alimentaires ?" 
      description = "5 4 3 2 1 0 Partez !"
      /> 
      <CollapseFaq 
      title = "Yukids exploite-t-il les données des utilisateurs ?" 
      description = "Oui, nous revendons vos données à Google"
      /> 
      <CollapseFaq 
      title = "Comment sont vérifiées les informations renseignées dans l’application ?" 
      description = "Vérification par l'équipe Yuka et par les utilisateurs"
      /> 
      <CollapseFaq 
      title = "J’ai scanné un produit qui n’a aucune note, pourquoi ?" 
      description = "Parcque"
      /> 
      <CollapseFaq 
      title = "Pourquoi faut-il s’inscrire pour utiliser Yuka ?" 
      description = "Pour pouvoir revendre vos données"
      /> 
      <CollapseFaq 
      title = "Yuka a-t-il accès à mes photos ou à mes contacts mails ?" 
      description = "Evidement"
      /> 
      <CollapseFaq 
      title = "Comment se désabonner pour ne plus recevoir la newsletter ?" 
      description = "Impossible"
      /> 
    </div>
  )
}