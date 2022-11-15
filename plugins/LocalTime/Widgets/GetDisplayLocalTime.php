<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */
namespace Piwik\Plugins\LocalTime\Widgets;

use Piwik\Date;
use Piwik\Option;
use Piwik\Piwik;
use Piwik\Widget\Widget;
use Piwik\Widget\WidgetConfig;

class GetDisplayLocalTime extends Widget
{
    public static function configure(WidgetConfig $config)
    {
        /**
         * Set the category the widget belongs to.
         */
        $config->setCategoryId('LocalTime_Live');

        /**
         * Set the name of the widget belongs to.
         */
        $config->setName('LocalTime_DisplayLocalTime');

        /**
         * Set the order of the widget. The lower the number, the earlier the widget will be listed within a category.
         */
        $config->setOrder(99);

    }

    /**
     * This method renders the widget.
     *
     * @return string
     * @throws \Exception
     */
    public function render()
    {
        $timezone = Option::get('SitesManager_DefaultTimezone');
        $date = Date::factoryInTimezone('now', $timezone);

        return "<div class='widgetBody'><p id='realTimeClock' class='tourSuperUserNote'>{$date->getDatetime()}</p></div>";
    }

}